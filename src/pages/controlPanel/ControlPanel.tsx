import { Tabs } from '@applaudo/react-clapp-ui';
import { Network, Screen, User } from './panels';
import { Provider } from 'react-redux';
import { settingsStore } from '@/state/settings';

export const ControlPanel = () => {
  return (
    <Provider store={settingsStore}>
      <Tabs defaultActiveKey="network" tabPosition="vertical" animated tabBarGutter={4}>
        <Tabs.TabPane key="network" tab="Network">
          <Network/>
        </Tabs.TabPane>
        <Tabs.TabPane key="screen" tab="Screen">
          <Screen/>
        </Tabs.TabPane>
        <Tabs.TabPane key="user" tab="User">
          <User/>
        </Tabs.TabPane>
      </Tabs>
    </Provider>
  );
};
