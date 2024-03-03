import { Heading, Label } from '@applaudo/react-clapp-ui';
import reactLogo from '@/assets/react.svg';
import rematchLogo from '@/assets/rematch.svg';
import styles from './home.module.scss';
import classes from 'classnames';

export const Home = () => {
  const rLogo = classes(styles.react, styles.spinning, styles.logo);
  return (
    <>
      <Heading level={3}>Welcome to Rematch Tutorial</Heading>
      <Label className={styles.description}>
        This is a simple tutorial to understand the basic concepts of Rematch.
      </Label>
      <Heading level={4} style={{ textAlign: 'center' }}>React + Rematch = ❤️</Heading>
      <div className={styles.card_logos}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={rLogo} alt="React logo"/>
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={rematchLogo} className={styles.logo} alt="Vite logo"/>
        </a>
      </div>
    </>
  );
}
