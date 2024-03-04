import { useSelectTodo, useTodoDispatch } from '@/hooks/useTodo.ts';
import { useSoundFX } from '@/hooks/useSoundFX.ts';
import { SkeletonList, TodoCard } from '@/components';
import styles from './todo.module.scss';
import { ChangeEvent } from 'react';

export const TodoList = () => {
  const state = useSelectTodo(s => s.todo);
  const dispatch = useTodoDispatch();
  const {items} = state;
  const fxs = useSoundFX();


  const onCheck = (checked: boolean, element: ChangeEvent<HTMLInputElement>) => {
    const itemId = element.target.id;
    const item = items.find(i => i.id === itemId);
    if (!item) {
      return;
    }
    if(checked) {
      fxs.playDone();
    } else {
      fxs.playUndo();
    }

    item.done = checked;
    dispatch.todo.updateItem(item);
  };

  if (!fxs.ready) {
    return <SkeletonList/>;
  }

  return (
    <div className={styles.todo_list_view}>
      {items.map((item) => (
        <TodoCard
          key={item.id}
          item={item}
          onStatusChange={onCheck}
          onDelete={() => fxs.playUndo()}
        />
      ))}
    </div>
  );
};
