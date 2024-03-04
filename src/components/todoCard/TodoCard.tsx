import { TodoItem } from '@/types/todo';
import { Button, Card, Checkbox } from '@applaudo/react-clapp-ui';
import styles from './todoCard.module.scss';
import './extra.css';
import { ChangeEvent } from 'react';

export type TodoCardProps = {
  item: TodoItem;
  onStatusChange: (checked: boolean, evt: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (title: string) => void;
}
export const TodoCard = ({ item, onStatusChange }: TodoCardProps) => {
  const date = item.date.toLocaleString();
  const textDecoration = item.done ? 'line-through' : undefined;

  return (
    <Card direction="horizontal" cover="" elevation outline>
      <Card.Header title={item.title} subTitle={`Due date ${date}`} />
      <p style={{ textDecoration }}>{item.text}</p>
      <div className={styles.control_bar}>
        <Checkbox id={item.id} onChange={onStatusChange}>{item.done ? 'Finish' : 'Pending'}</Checkbox>
        <Button size="small" mode="secondary" className={styles.control_button}>
          delete
        </Button>
      </div>
    </Card>
  )
}
