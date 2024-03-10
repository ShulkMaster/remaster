import { PokeDispatch, PokeRootState } from '@/state/pokedex';
import { PageRequest, Pokemon } from '@/types/pokemon';
import { getPokemonPage, putPokemon } from '@/util/db';
import { api } from '@/util/api';

async function updateTotal(this: PokeDispatch): Promise<void> {
  try {
    this.pokemon.setLoading(true);
    const total = await api.getPokemonTotal();
    this.pokemon.setTotal(total);
  } catch (e) {
    console.error(e);
    // total as of March 2024
    this.pokemon.setTotal(1302);
  }
}

async function getPokemons(this: PokeDispatch, req: PageRequest, state: PokeRootState): Promise<void> {
  this.pokemon.setLoading(true);
  const db = state.db.db;
  const cached = await getPokemonPage(db, req);
  if (cached.length === req.limit) {
    // We have all the data we need
    this.pokemon.setPokemons(cached, req);
    return;
  }

  const apiCalls: Promise<Pokemon>[] = [];
  const cachedIds = new Set(cached.map((p) => p.id));
  for (let id = req.offset + 1; id <= req.limit; id++) {
    if (cachedIds.has(id)) {
      continue;
    }
    apiCalls.push(api.getPokemonById(id));
  }

  const results = await Promise.all(apiCalls);
  for (const p of results) {
    console.log(p.name);
    cached.push(p);
  }

  cached.sort((a, b) => a.id - b.id);
  this.pokemon.setPokemons(cached, req);

  // Save the new data to the cache
  return putPokemon(db, results);
}


export const pokemonEffects = (dispatch: PokeDispatch) => ({
  updateTotal: updateTotal.bind(dispatch),
  getPokemons: getPokemons.bind(dispatch),
});
