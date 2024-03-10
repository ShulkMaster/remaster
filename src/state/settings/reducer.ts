import { SettingsState } from '@/types/settings';

export const setBandwidth = (state: SettingsState, payload: number): void => {
  state.network.details.bandwidth = payload;
}

export const setIpv4 = (state: SettingsState, payload: string): void => {
  state.network.details.ipv4 = payload;
}

export const setIpv6 = (state: SettingsState, payload: string): void => {
  state.network.details.ipv6 = payload;
}

export const setPrivacy = (state: SettingsState, payload: 'public' | 'private'): void => {
  state.network.details.privacy = payload;
}

export const setAutoConnect = (state: SettingsState, payload: boolean): void => {
  state.network.details.autoConnect = payload;
}

export const setMetered = (state: SettingsState, payload: boolean): void => {
  state.network.details.metered = payload;
}

export const settingsReducers = {
  setBandwidth,
  setIpv4,
  setIpv6,
  setPrivacy,
  setAutoConnect,
  setMetered,
};
