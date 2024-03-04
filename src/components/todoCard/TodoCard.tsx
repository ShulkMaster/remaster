import { TodoItem } from '@/types/todo';
import { Button, Card, Checkbox } from '@applaudo/react-clapp-ui';
import styles from './todoCard.module.scss';
import './extra.css';

export type TodoCardProps = {
  item: TodoItem;
  onStatusChange: (title: string, done: boolean) => void;
  onDelete: (title: string) => void;
}
export const TodoCard = ({ item }: TodoCardProps) => {
  const date = item.date.toLocaleDateString();
  return (
    <Card direction="horizontal" cover="" elevation outline>
      <Card.Header title={item.title} subTitle={`Due date ${date}`} />
      <p>{item.text}</p>
      <div className={styles.control_bar}>
        <Checkbox>{item.done ? 'Finish' : 'Pending'}</Checkbox>
        <Button size="small" mode="secondary" className={styles.control_button}>
          delete
        </Button>
      </div>
    </Card>
  )
}
