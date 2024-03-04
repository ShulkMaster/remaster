import { TodoItem, TodoState } from '@/types/todo';
import { createModel } from '@rematch/core';
import { cloneDeep } from 'lodash';

export const todoState: TodoState = {
  items: [],
  selected: null,
};

const selectItem = (state: TodoState, payload: TodoItem | null): TodoState => {
  const newState = cloneDeep(state);
  newState.selected = payload;
  return newState;
};

const addItem = (state: TodoState, payload: TodoItem): TodoState => {
  const newState = cloneDeep(state);
  payload.id = generateId(10);
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

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateId(length: number): string {
  const charactersLength = characters.length;
  const randomValues = new Uint32Array(length);
  window.crypto.getRandomValues(randomValues);
  let id = '';
  for (let i = 0; i < length; i++) {
    id += characters.charAt(randomValues[i] % charactersLength);
  }
  return id;
}
