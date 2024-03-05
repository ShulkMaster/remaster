import styles from '@/pages/controlPanel/panels/panel.module.scss';
import Collapsible from 'react-collapsible';
import { HeaderPanel } from '@/pages/controlPanel/panels/PanelHead.tsx';
import { Select, TextInput, Switch, RadioGroup, Radio, Divider, Heading } from '@applaudo/react-clapp-ui';

export const Screen = () => {
  return (
    <div className={styles.setting_section}>
      <Collapsible trigger={<HeaderPanel title="Shared Configuration"/>} transitionTime={150}>
        <div className={styles.panel_body}>
          <div className={styles.input_list}>
            <TextInput label="Name" placeholder="10.0.0.0" crossOrigin={undefined} maxLength={15}/>
            <Switch crossOrigin={undefined}>Nocturne Light</Switch>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger={<HeaderPanel title="Monitor 1"/>} transitionTime={150}>
        <div className={styles.panel_body}>
          <div className={styles.input_list}>
            <Switch crossOrigin={undefined}>Enabled</Switch>
          </div>
          <div className={styles.input_list}>
            <Select label="Refresh Rate" defaultActiveFirstOption>
              <Select.Option value="60">60 HZ</Select.Option>
              <Select.Option value="120">120 HZ</Select.Option>
              <Select.Option value="165">165 HZ</Select.Option>
            </Select>
            <Select label="Resolution" defaultActiveFirstOption>
              <Select.Option value="720p">1280x720</Select.Option>
              <Select.Option value="1080p">1920x1080</Select.Option>
              <Select.Option value="1440p">2560x1440</Select.Option>
              <Select.Option value="4k">3840x2160</Select.Option>
            </Select>
            <RadioGroup label="Orientation">
              <Radio value="horizontal" key="h">Horizontal</Radio>
              <Radio value="vertical" key="v">Vertical</Radio>
            </RadioGroup>
          </div>
          <Divider />
          <Heading level={5}>Adaptive Sync</Heading>
          <span className={styles.spacing_section}/>
          <div className={styles.input_list}>
            <Switch crossOrigin={undefined}>G-Sync</Switch>
            <Switch crossOrigin={undefined}>FreeSync</Switch>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger={<HeaderPanel title="Monitor 2"/>} transitionTime={150}>
        <div className={styles.panel_body}>
          <div className={styles.input_list}>
            <Switch crossOrigin={undefined}>Enabled</Switch>
          </div>
          <div className={styles.input_list}>
            <Select label="Refresh Rate" defaultActiveFirstOption>
              <Select.Option value="60">60 HZ</Select.Option>
              <Select.Option value="120">120 HZ</Select.Option>
              <Select.Option value="165">165 HZ</Select.Option>
              <Select.Option value="165">240 HZ</Select.Option>
            </Select>
            <Select label="Resolution" defaultActiveFirstOption>
              <Select.Option value="1080p">1920x1080</Select.Option>
              <Select.Option value="1440p">2560x1440</Select.Option>
              <Select.Option value="4k">3840x2160</Select.Option>
            </Select>
            <RadioGroup label="Orientation">
              <Radio value="horizontal" key="h">Horizontal</Radio>
              <Radio value="vertical" key="v">Vertical</Radio>
            </RadioGroup>
          </div>
          <Divider />
          <Heading level={5}>Adaptive Sync</Heading>
          <span className={styles.spacing_section}/>
          <div className={styles.input_list}>
            <Switch crossOrigin={undefined}>G-Sync</Switch>
          </div>
        </div>
      </Collapsible>
    </div>
  );
};
