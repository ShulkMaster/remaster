import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PokeDispatch, PokeRootState } from '@/state/pokedex';

export const usePokeDispatch: () => PokeDispatch = useDispatch;
export const usePokeSelect: TypedUseSelectorHook<PokeRootState> = useSelector;
