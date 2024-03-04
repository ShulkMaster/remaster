export type TodoItem = {
  id: string;
  text: string;
  done: boolean;
  title: string;
  date: Date;
};

export type TodoState = {
  items: TodoItem[];
  selected: TodoItem | null;
};
