import { SettingsState } from '@/types/settings';
import { createModel } from '@rematch/core';
import { SettingsRootModel } from '@/state/settings/index.ts';
import { settingsReducers } from '@/state/settings/reducer.ts';

export const initialState: SettingsState = {
  network: {
    details: {
      autoConnect: true,
      bandwidth: 0,
      ipv4: '',
      metered: false,
      privacy: 'public',
      ipv6: '',
    },
    vpn: {
      dns: '',
      gateway: '',
      allowedScan: false,
      name: '',
      protocol: 'openvpn',
      random1: false,
    }
  },
  screen: {
    primary: {
      adaptiveSync: {
        freesync: false,
        gsync: false,
      },
      enabled: true,
      orientation: 'horizontal',
      refreshRate: 60,
      resolution: '1920x1080',
    },
    secondary: {
      adaptiveSync: {
        freesync: false,
        gsync: false,
      },
      enabled: false,
      orientation: 'horizontal',
      refreshRate: 60,
      resolution: '1920x1080',
    },
    shared: {
      name: '',
      nocturne: false,
    }
  },
  user: {
    personal: {
      address: '',
      city: '',
      email: '',
      married: false,
      name: '',
      phone: '',
    },
    preferences: {
      darkMode: false,
      language: 'en',
      notifications: true,
    },
    security: {
      password: '',
      twoFactor: false,
    }
  }
};

export const settingsModel = createModel<SettingsRootModel>()({
  state: initialState,
  reducers: settingsReducers,
  effects: {
    saveToCloud: async function (_, state) {
      console.log(this);
      console.log(state.settings);
    }
  }
});
