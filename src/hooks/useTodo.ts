import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TodoDispatch , TodoRootState} from '@/state/todo';

export const useTodoDispatch: () => TodoDispatch = useDispatch;
export const useSelectTodo: TypedUseSelectorHook<TodoRootState> = useSelector;
