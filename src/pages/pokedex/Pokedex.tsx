import { Provider } from 'react-redux';
import { pokemonStore } from '@/state/pokedex';
import { PokemonList } from './PokemonList';
import { usePokeDispatch, usePokeSelect } from '@/hooks/usePokedex';
import { PropsWithChildren, useEffect } from 'react';

const LoadWrapper = ({children}: PropsWithChildren) => {
  const dispatch = usePokeDispatch();
  const status = usePokeSelect(s => s.db.status);

  useEffect(() => {
    dispatch.db.connect();
  }, []);

  if (status === 'error') {
    return <p>Error</p>;
  }

  if (status !== 'connected') {
    return <div>Loading...</div>;
  }

  return children;
};

export const Pokedex = () => {
  return (
    <Provider store={pokemonStore}>
      <LoadWrapper>
        <PokemonList/>
      </LoadWrapper>
    </Provider>
  );
};
