import { useSelectTodo, useTodoDispatch } from '@/hooks/useTodo.ts';
import { useSoundFX } from '@/hooks/useSoundFX.ts';
import { SkeletonList, TodoCard } from '@/components';
import styles from './todo.module.scss';
import { ChangeEvent, MouseEvent } from 'react';

export const TodoList = () => {
  const state = useSelectTodo(s => s.todo);
  const dispatch = useTodoDispatch();
  const {items} = state;
  const fxs = useSoundFX();

  const onCheck = (checked: boolean, evt: ChangeEvent<HTMLInputElement>) => {
    evt.stopPropagation();
    const itemId = evt.target.dataset.id;
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

  const onSelected = (evt: MouseEvent<HTMLDivElement>) => {
    const itemId = evt.currentTarget.id;
    const item = items.find(i => i.id === itemId);
    if (!item) {
      return;
    }
    dispatch.todo.selectItem(item);
  };

  const onDeleted = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    const itemId = evt.currentTarget.dataset.id;
    if (!itemId) {
      return;
    }
    dispatch.todo.removeItem(itemId);
  }

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
          onSelected={onSelected}
          onDelete={onDeleted}
        />
      ))}
    </div>
  );
};
