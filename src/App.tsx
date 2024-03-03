import { FC, useState } from 'react';
import { AppLayout } from '@/components';
import { Home, Counter, Todo } from '@/pages';
export function App() {
  const [route, setRoute] = useState('/')

  let Content: FC;

  switch (route) {
    case 'counter':
      Content = Counter;
      break;
    case 'todo':
      Content = Todo;
      break;
    default:
      Content = Home;
  }

  return (
    <AppLayout onRouteChange={setRoute} selected={route}>
      <Content />
    </AppLayout>
  )
}
