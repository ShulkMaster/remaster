import { ArrowDropDownIcon, ArrowDropUpIcon, Heading } from '@applaudo/react-clapp-ui';
import styles from './panel.module.scss';
import classnames from 'classnames';

export type HeaderPanelProps = {
  title: string;
  isCollapsed?: boolean;
}
export const HeaderPanel = ({ title, isCollapsed }: HeaderPanelProps) => {
  return (
    <div className={classnames(styles.panel_header)}>
      <Heading level={4}>{title}</Heading>
      { isCollapsed ? <ArrowDropDownIcon width={36} /> : <ArrowDropUpIcon width={36} />}
    </div>
  )
}
