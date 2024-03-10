import { createModel } from '@rematch/core';
import { PokemonRootModel } from '@/state/pokedex';
import { openDB } from '@/util/db.ts';

type DBStatus = 'disconnected' | 'loading' | 'connected' | 'error';
type DbState = {
  status: DBStatus;
  db: IDBDatabase;
};

const state: DbState = {
  status: 'disconnected',
  db: {} as IDBDatabase,
};

export const dbModel = createModel<PokemonRootModel>()({
  state,
  reducers: {
    setStatus: (state, payload: DBStatus) => {
      return {
        ...state,
        status: payload,
      };
    },
    setDb: (state, payload: IDBDatabase) => {
      return {
        ...state,
        status: 'connected',
        db: payload,
      };
    }
  },
  effects: {
    async connect() {
      try {
        const db = await openDB();
        this.setDb(db);
      } catch (e) {
        console.error(e);
        this.setStatus('error');
      }
    },
  },
});
