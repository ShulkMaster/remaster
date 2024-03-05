import { Tabs } from '@applaudo/react-clapp-ui';
import { Network, Screen } from './panels';



export const ControlPanel = () => {
  return (
    <Tabs defaultActiveKey="network" tabPosition="vertical" animated tabBarGutter={4}>
      <Tabs.TabPane key="network" tab="Network">
        <Network />
      </Tabs.TabPane>
      <Tabs.TabPane key="screen" tab="Screen">
        <Screen />
      </Tabs.TabPane>
      <Tabs.TabPane key="storage" tab="sd">
        <div>Storage</div>
      </Tabs.TabPane>
    </Tabs>
  );
};
