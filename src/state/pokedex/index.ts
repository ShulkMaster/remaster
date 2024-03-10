import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core';
import { pokemon } from './pokemon';
import { dbModel } from './db';

export interface PokemonRootModel extends Models<PokemonRootModel> {
  pokemon: typeof pokemon;
  db: typeof dbModel;
}

const models: PokemonRootModel = {
  pokemon,
  db: dbModel,
};

export const pokemonStore = init({
  name: 'pokemonStore',
  models,
  redux: {
    devtoolOptions: {
      serialize: true,
    }
  }
});

export type PokeDispatch = RematchDispatch<PokemonRootModel>;
export type PokeRootState = RematchRootState<PokemonRootModel>;
