import { Provider } from 'react-redux';
import { todoStore } from '@/state/todo';
import { TodoForm, TodoList } from '@/components';

export const Todo = () => {

  return (
    <Provider store={todoStore}>
      <TodoList />
      <TodoForm />
    </Provider>
  );
}
