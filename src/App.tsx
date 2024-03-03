import { FC, useState } from 'react';
import { AppLayout } from '@/components';
import { Home, Counter } from '@/pages';
export function App() {
  const [route, setRoute] = useState('counter')

  let Content: FC;

  switch (route) {
    case 'counter':
      Content = Counter;
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