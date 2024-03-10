import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { SettingsRootState, SettingsDispatch } from '@/state/settings';
import { Immutable } from 'immer';

export const useSettingsDispatch: () => SettingsDispatch = useDispatch;
export const useSelectSettings: TypedUseSelectorHook<Immutable<SettingsRootState>> = useSelector;
