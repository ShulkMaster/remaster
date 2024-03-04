import { useSelectTodo } from '@/hooks/useTodo.ts';
import { useSoundFX } from '@/hooks/useSoundFX.ts';
import { SkeletonList, TodoCard } from '@/components';
import styles from './todo.module.scss';

export const TodoList = () => {
  const state = useSelectTodo(s => s.todo);
  const {items} = state;
  const fxs = useSoundFX();

  if (!fxs.ready) {
    return <SkeletonList/>;
  }

  console.log('TodoList', items);

  return (
    <div className={styles.todo_list_view}>
      {items.map((item) => (
        <TodoCard
          key={item.id}
          item={item}
          onStatusChange={() => fxs.playDone()}
          onDelete={() => fxs.playUndo()}
        />
      ))}
    </div>
  );
};
