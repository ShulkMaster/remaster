import { TodoItem, TodoState } from '@/types/todo';
import { createModel } from '@rematch/core';
import { cloneDeep } from 'lodash';

export const todoState: TodoState = {
  items: [{
    title: 'First item',
    done: false,
    id: '1',
    date: new Date(),
    text: 'This is the first item'
  }],
  selected: null,
};

const selectItem = (state: TodoState, payload: TodoItem | null): TodoState => {
  const newState = cloneDeep(state);
  newState.selected = payload;
  return newState;
};

const addItem = (state: TodoState, payload: TodoItem): TodoState => {
  const newState = cloneDeep(state);
  newState.items.push(payload);
  return newState;
}

const removeItem = (state: TodoState, payload: string): TodoState => {
  const newState = cloneDeep(state);
  newState.items = newState.items.filter((item) => item.id !== payload);
  return newState;
}

const updateItem = (state: TodoState, payload: TodoItem): TodoState => {
  const newState = cloneDeep(state);
  const index = newState.items.findIndex((item) => item.id === payload.id);

  if (index === -1) {
    return newState;
  }

  newState.items[index] = payload;
  return newState;
}

export const todoModel = createModel()({
  state: todoState,
  reducers: {
    selectItem,
    addItem,
    removeItem,
    updateItem,
  }
});
