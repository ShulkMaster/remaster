import { Provider } from 'react-redux';
import { todoStore } from '@/state/todo';
import { TodoList } from '@/components';

export const Todo = () => {

  return (
    <Provider store={todoStore}>
      <TodoList />
    </Provider>
  );
}
