import Collapsible from 'react-collapsible';
import styles from './panel.module.scss';
import { HeaderPanel } from './PanelHead.tsx';
import { TextInput, Slider, Checkbox, Select } from '@applaudo/react-clapp-ui';

export const Network = () => {
  return (
    <div className={styles.setting_section}>
      <Collapsible trigger={<HeaderPanel title="Details"/>} transitionTime={150}>
        <div className={styles.panel_body}>
          <div className={styles.input_list}>
            <Slider label="Bandwidth" min={10} max={100} step={1} mode="regular"/>
            <TextInput label="Direccion IPv4" placeholder="10.0.0.0" crossOrigin={undefined} maxLength={15}/>
            <TextInput label="Direccion IPv6" placeholder="fe80::ff:9471:ff:ff" crossOrigin={undefined} maxLength={15}/>
          </div>
          <div className={styles.input_list}>
            <Select label="Network type" defaultActiveFirstOption style={{width: 256}}>
              <Select.Option value="public">Public</Select.Option>
              <Select.Option value="private">Private</Select.Option>
              <Select.Option value="restricted">Restricted</Select.Option>
            </Select>
            <Checkbox>Auto connect</Checkbox>
            <Checkbox>Metered connection</Checkbox>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger={<HeaderPanel title="VPN"/>} transitionTime={150}>
        <div className={styles.panel_body}>
          <div className={styles.input_list}>
            <TextInput label="Name" placeholder="VPN 1" crossOrigin={undefined} maxLength={20}/>
            <TextInput label="Gateway" placeholder="ABD" crossOrigin={undefined} maxLength={10}/>
            <Checkbox>Allow Scan</Checkbox>
          </div>
          <div className={styles.input_list}>
            <TextInput label="DNS Server" placeholder="10.0.0.0" crossOrigin={undefined} maxLength={15}/>
            <Checkbox>Random 1</Checkbox>
          </div>
          <div className={styles.input_list}>
            <Select label="Protocol" defaultActiveFirstOption style={{width: 256}}>
              <Select.Option value="protocol1">Protocol 1</Select.Option>
              <Select.Option value="protocol2">Protocol 2</Select.Option>
              <Select.Option value="protocol3">Protocol 3</Select.Option>
            </Select>
          </div>
        </div>
      </Collapsible>
    </div>
  );
};
