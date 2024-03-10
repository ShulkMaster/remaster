import { Card } from '@applaudo/react-clapp-ui';
import { Pokemon } from '@/types/pokemon';
import styles from './pokedex.module.scss';

export type PokemonCardProps = {
  pokemon: Pokemon;
}
export const PokemonCard = ({pokemon}: PokemonCardProps) => {
  return (
    <Card direction="horizontal" cover={pokemon.sprites.front_default} elevation outline>
      <Card.Header title={pokemon.name.toUpperCase()} subTitle={`ID: ${pokemon.id}`} />
      <div>
        <div className={styles.poke_props}>
          <p>Attributes</p>
          <ul className={styles.poke_props}>
            <li>Height: {pokemon.height}</li>
            <li>Weight: {pokemon.weight}</li>
            <li>Base Experience: {pokemon.base_experience}</li>
            <li>Order: {pokemon.order}</li>
          </ul>
        </div>
        <div className={styles.poke_props}>
          <p>Sprites</p>
          <Card.Section>
            <img src={pokemon.sprites.front_default} alt="front_default" />
            <img src={pokemon.sprites.back_default} alt="back_default" />
            <img src={pokemon.sprites.front_shiny??undefined} alt="front_shiny" />
            <img src={pokemon.sprites.back_shiny??undefined} alt="back_shiny" />
          </Card.Section>
        </div>
      </div>
    </Card>
  );
};
