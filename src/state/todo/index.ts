import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { todoModel } from './todoModel';

const models = {
  todo: todoModel,
}

export type TodoRootModel = typeof models;
export const todoStore = init({
  name: 'todoStore',
  models
});

export type TodoDispatch = RematchDispatch<TodoRootModel>;
export type TodoRootState = RematchRootState<TodoRootModel>;
