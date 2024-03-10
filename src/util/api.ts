import { Pokemon } from '@/types/pokemon';

const base = 'https://pokeapi.co/api/v2';

export function getPokemonTotal(): Promise<number> {
  return fetch(`${base}/pokemon?limit=1&offset=0`)
    .then((res) => res.json())
    .then((data) => data.count);
}
export function getPokemonById(id: number): Promise<Pokemon> {
  return fetch(`${base}/pokemon/${id}`)
    .then((res) => res.json());
}

export const api = {
  getPokemonTotal,
  getPokemonById,
}
