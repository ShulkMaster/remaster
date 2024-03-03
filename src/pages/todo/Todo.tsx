import { SkeletonList } from '@/pages/todo/SkeletonList.tsx';
import { useSoundFX } from '@/hooks/useSoundFX.ts';

export const Todo = () => {
  const fxs = useSoundFX();

  if(!fxs.ready) {
    return <SkeletonList />;
  }

  return (
    <div>
      <button onClick={fxs.playDone}>C</button>
      <button onClick={fxs.playUndo}>C</button>
    </div>
  );
}
