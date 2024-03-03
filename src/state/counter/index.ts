import { createModel, init } from '@rematch/core';

export const counterState = createModel()({
  state: 0,
  reducers: {
    increment: (state: number) => state + 1,
    decrement: (state: number) => state - 1,
    jump: (state: number, payload: number) => state + payload,
    reset: () => 0,
  },
});

export const counterStore = init({
  name: 'counterStore',
  models: {count: counterState},
});
