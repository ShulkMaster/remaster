import { FC, useState } from 'react';
import { AppLayout } from '@/components';
import { Home, Counter, Todo, ControlPanel } from '@/pages';

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
    default:
      Content = Home;
  }

  return (
    <AppLayout onRouteChange={setRoute} selected={route}>
      <Content/>
    </AppLayout>
  );
}
