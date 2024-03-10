import { Pagination, Card, Heading } from '@applaudo/react-clapp-ui';
import { useEffect } from 'react';
import { usePokeDispatch, usePokeSelect } from '@/hooks/usePokedex.ts';

export const PokemonList = () => {
  const pokePage = usePokeSelect(s => s.pokemon);
  const dispatch = usePokeDispatch();
  const { total, loading, data } = pokePage;

  useEffect(() => {
    // if total is 0, fetch the total from the server
    if (total === 0 && !loading) {
      dispatch.pokemon.updateTotal();
    }
  }, [total, loading])

  return (
    <div>
      <Heading level={3}>{total} Pokemons</Heading>
      <button onClick={() => dispatch.pokemon.getPokemons({ limit: 10, offset: 0, filter: {} })}>Fetch Pokemons</button>
      <Card direction="horizontal" cover="">
        <ul>
          {data.map((p) => (<li key={p.id}>{p.name}</li>))}
        </ul>
      </Card>
      <Pagination disabled={loading} total={total} size={10} onChange={console.log} />
    </div>
  )
}
