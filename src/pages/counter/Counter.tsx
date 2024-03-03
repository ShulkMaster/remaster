import { Button, Heading } from '@applaudo/react-clapp-ui';
import { Text } from '@/components';
import { counterStore } from '@/state/counter';
import styles from './counter.module.scss';
import { useEffect, useState } from 'react';

const dispatch = counterStore.dispatch.count;

export const Counter = () => {
  const [count, setCount] = useState(counterStore.getState().count);

  useEffect(() => {
    counterStore.subscribe(() => {
      const newCount = counterStore.getState().count;
      setCount(newCount);
    });
  }, []);

  return (
    <>
      <Heading level={3}>Counter</Heading>
      <Text size={18}>Simple Counter widget with Rematch</Text>
      <Heading level={3}>The count is {count}</Heading>
      <div className={styles.counter_controls}>
        <Button onClick={dispatch.reset}>
          Reset
        </Button>
        <Button onClick={dispatch.increment}>
          +1
        </Button>
        <Button onClick={dispatch.decrement}>
          -1
        </Button>
      </div>
    </>
  )
}
