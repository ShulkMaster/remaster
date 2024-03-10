import { PageRequest, Pokemon } from '@/types/pokemon';
import { createModel } from '@rematch/core';
import { initPage } from '@/util/page';
import { PokemonRootModel } from '@/state/pokedex';
import { pokemonEffects } from './effects';

export const pokemon = createModel<PokemonRootModel>()({
  state: initPage<Pokemon>(),
  reducers: {
    setTotal: (state, payload: number) => {
      return {
        ...state,
        total: payload,
        loading: false,
      };
    },
    setPokemons: (state, payload: Pokemon[], req: PageRequest) => {
      return {
        ...state,
        data: payload,
        limit: req.limit,
        offset: req.offset,
        loading: false,
      };
    },
    setLoading: (state, payload: boolean) => {
      return {
        ...state,
        loading: payload,
      };
    }
  },
  effects: pokemonEffects,
});
