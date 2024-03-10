import { init, Models, RematchDispatch, RematchRootState } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import { settingsModel } from '@/state/settings/model';

export interface SettingsRootModel extends Models<SettingsRootModel> {
  settings: typeof settingsModel;
}

export const settingsStore = init<SettingsRootModel>({
  name: 'settingsStore',
  models: {
    settings: settingsModel,
  },
  plugins: [immerPlugin()],
});

export type SettingsDispatch = RematchDispatch<SettingsRootModel>;
export type SettingsRootState = RematchRootState<SettingsRootModel>;
