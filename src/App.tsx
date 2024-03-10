import { FC, useState } from 'react';
import { AppLayout } from '@/components';
import { Home, Counter, Todo, ControlPanel, Pokedex } from '@/pages';

export function App() {
  const [route, setRoute] = useState('panel');

  let Content: FC;

  switch (route) {
    case 'counter':
      Content = Counter;
      break;
    case 'todo':
      Content = Todo;
      break;
    case 'panel':
      Content = ControlPanel;
      break;
    case 'poke-dex':
      Content = Pokedex;
      break;
    default:
      Content = Home;
  }

  return (
    <AppLayout onRouteChange={setRoute} selected={route}>
      <Content/>
    </AppLayout>
  );
}
