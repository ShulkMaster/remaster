import { Paginable } from '@/types/pokemon';

export function initPage<T>(): Paginable<T> {
  return {
    data: [],
    limit: 0,
    loading: false,
    offset: 0,
    total: 0,
    filter: {},
  };
}
