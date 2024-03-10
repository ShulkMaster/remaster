import { Layout, Menu, ItemType } from '@applaudo/react-clapp-ui';
import rematchLogo from '@/assets/rematch.svg';
import styles from './layout.module.scss';
import { ReactElement, useCallback } from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';

export type AppLayoutProps = {
  selected: string;
  children: ReactElement;
  onRouteChange: (r: string) => void;
}

const menuItems: ItemType[] = [
  { key: '/', label: 'Home' },
  { key: 'counter', label: 'Counter' },
  { key: 'todo', label: 'To Do' },
  { key: 'panel', label: 'Panel' },
  { key: 'poke-dex', label: 'Poke dex' },
];

export const AppLayout = ({ selected, onRouteChange, children }: AppLayoutProps) => {
  const flat = useCallback((info: MenuInfo) => {
    onRouteChange(info.key)
  }, [onRouteChange])

  return (
    <Layout theme="light" className={styles.aside_navigation}>
      <Layout.Header title="Rematch Tutorial" className={styles.header_content}>
        <img src={rematchLogo} alt="logo" height={32} />
      </Layout.Header>
      <main className={styles.main_content}>
        {children}
      </main>
      <Layout.Sider theme="light" className={styles.side_bar}>
        <Menu items={menuItems} className={styles.item_color} selectedKeys={[selected]} onClick={flat} />
      </Layout.Sider>
    </Layout>
  );
};
