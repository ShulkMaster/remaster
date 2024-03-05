import styles from './panel.module.scss';
import { Avatar, Checkbox, Heading, Radio, RadioGroup, Switch, TextInput } from '@applaudo/react-clapp-ui';
import { HeaderPanel } from '@/pages/controlPanel/panels/PanelHead.tsx';
import Collapsible from 'react-collapsible';

export const User = () => {
  return (
    <div className={styles.setting_section}>
      <div>
        <Avatar size="large" src="https://picsum.photos/id/45/300/300"/>
        <Heading level={3}>Juanito64</Heading>
      </div>
      <Collapsible trigger={<HeaderPanel title="Personal Information"/>} transitionTime={150}>
        <div className={styles.panel_body}>
          <div className={styles.input_list}>
            <TextInput label="Name" placeholder="Juan" crossOrigin={undefined} maxLength={15}/>
            <TextInput label="Email" mode="email" placeholder="mail@cop.com" crossOrigin={undefined} maxLength={15}/>
            <TextInput label="Phone" mode="tel" placeholder="1234-6890" crossOrigin={undefined} maxLength={9}/>
            <Checkbox>Married</Checkbox>
          </div>
          <div className={styles.input_list}>
            <TextInput label="Address" placeholder="1234 Main St" crossOrigin={undefined} maxLength={15}/>
            <TextInput label="City" placeholder="San Salvador" crossOrigin={undefined} maxLength={15}/>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger={<HeaderPanel title="Security"/>} transitionTime={150}>
        <div className={styles.panel_body}>
          <div className={styles.input_list}>
            <TextInput label="Password" mode="password" placeholder="********" crossOrigin={undefined} maxLength={15}/>
            <Switch crossOrigin={undefined}>Two Factor Authentication</Switch>
          </div>
        </div>
      </Collapsible>
      <Collapsible trigger={<HeaderPanel title="Preferences"/>} transitionTime={150}>
        <div className={styles.panel_body}>
          <div className={styles.input_list}>
            <Switch crossOrigin={undefined}>Dark Mode</Switch>
            <Switch crossOrigin={undefined}>Notifications</Switch>
          </div>
          <div className={styles.input_list}>
            <RadioGroup label="Language">
              <Radio value="english" key="english">English</Radio>
              <Radio value="spanish" key="spanish">Spanish</Radio>
              <Radio value="french" key="french">French</Radio>
            </RadioGroup>
          </div>
        </div>
      </Collapsible>
    </div>
  );
};
