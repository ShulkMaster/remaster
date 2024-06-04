import { Pagination, Heading, SearchBar } from '@applaudo/react-clapp-ui';
import { useCallback, useEffect } from 'react';
import { usePokeDispatch, usePokeSelect } from '@/hooks/usePokedex.ts';
import { PokemonCard } from './PokemonCard';
import styles from './pokedex.module.scss';
import './pokedex.css';

export const PokemonList = () => {
  const pokePage = usePokeSelect(s => s.pokemon);
  const dispatch = usePokeDispatch();
  const {total, loading, data, filter} = pokePage;

  useEffect(() => {
    // if total is 0, fetch the total from the server
    if (total === 0 && !loading) {
      dispatch.pokemon.updateTotal();
    }
  }, [total, loading]);

  useEffect(() => {
    dispatch.pokemon.getPokemons({limit: 10, offset: 0, filter});
  }, []);

  const onPage = useCallback((pNumber: number, size: number) => {
    dispatch.pokemon.getPokemons({limit: size, offset: (pNumber - 1) * size, filter});
  }, [filter]);

  const onSearch = useCallback((name: string) => {
    dispatch.pokemon.findByName(name);
  }, [filter]);

  const totalPages = 'name' in pokePage.filter ? data.length : pokePage.total

  return (
    <div className={styles.pokedex_list}>
      <Heading level={3}>Pokemons</Heading>
      <SearchBar onChange={onSearch} value={filter.name}/>
      <ul className={styles.pokedex_list_tag}>
        {data.map((p) => (
          <li key={p.id}>
            <PokemonCard pokemon={p}/>
          </li>
        ))}
      </ul>
      <Pagination disabled={loading} total={totalPages} size={10} onChange={onPage}/>
    </div>
  );
};
