import { DateTime } from 'luxon';

export type TodoItem = {
  id: string;
  text: string;
  done: boolean;
  title: string;
  date: DateTime;
};

export type TodoState = {
  items: TodoItem[];
  selected: TodoItem | null;
};
