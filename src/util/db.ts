import { PageRequest, Pokemon } from '@/types/pokemon.ts';

export const dbName = 'rematchDB';
export const pokemonStore = {
  name: 'pokemon',
  index: {
    name: 'nameIndex',
  },
  keyPath: 'id',
};

const unwrap = {
  db: (evt: any) => evt.target.result as IDBDatabase,
  cursor: (evt: any) => evt.target.result as IDBCursorWithValue,
};

function upgrade1(evt: Event) {
  const db = unwrap.db(evt);
  const pokemon = db.createObjectStore(pokemonStore.name, {
    keyPath: pokemonStore.keyPath,
    autoIncrement: false
  });
  pokemon.createIndex(pokemonStore.index.name, 'name', {unique: true});
}

export function openDB(): Promise<IDBDatabase> {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);
    request.onupgradeneeded = upgrade1;
    request.onsuccess = (evt) => {
      const db = unwrap.db(evt);
      resolve(db);
    };
    request.onerror = reject;
  });
}

function collect<T>(cursor: IDBRequest<IDBCursorWithValue | null>): Promise<T[]> {
  return new Promise<T[]>((resolve, reject) => {
    const items: T[] = [];
    cursor.onsuccess = (evt) => {
      const cursor = unwrap.cursor(evt);
      if(!cursor) return resolve(items);
      items.push(cursor.value);
      cursor.continue();
    };
    cursor.onerror = reject;
  });
}

export async function getPokemonPage(db: IDBDatabase, req: PageRequest) {
  const trans = db.transaction(pokemonStore.name, 'readonly');
  const store = trans.objectStore(pokemonStore.name);
  const end = req.offset + req.limit;
  const cursor = store.openCursor(IDBKeyRange.bound(req.offset, end));
  return await collect<Pokemon>(cursor);
}

export function putPokemon(db: IDBDatabase, pokemons: Pokemon[]): Promise<void> {
  const trans = db.transaction(pokemonStore.name, 'readwrite');
  const store = trans.objectStore(pokemonStore.name);

  for (const p of pokemons) {
    store.put(p);
  }

  const result = new Promise<void>((res, rej) => {
    trans.oncomplete = () => res();
    trans.onerror = rej;
  });
  trans.commit();
  return result;
}
