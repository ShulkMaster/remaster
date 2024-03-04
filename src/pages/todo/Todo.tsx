import { SkeletonList } from '@/pages/todo/SkeletonList.tsx';
import { useSoundFX } from '@/hooks/useSoundFX.ts';
import { TodoCard } from '@/components/todoCard/TodoCard.tsx';
import style from './todo.module.scss';

export const Todo = () => {
  const fxs = useSoundFX();

  if(!fxs.ready) {
    return <SkeletonList />;
  }

  return (
    <div>
      <div className={style.todo_list_view}>
        <TodoCard item={{
          title: 'Title',
          date: new Date(),
          text: 'Text',
          done: false,
          id: '1',
        }} onDelete={() => {}} onStatusChange={() => {}}/>
      </div>
      <button onClick={fxs.playDone}>C</button>
      <button onClick={fxs.playUndo}>C</button>
    </div>
  );
}
