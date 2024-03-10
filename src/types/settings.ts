export type NetworkSettings = {
  details: {
    bandwidth: number;
    ipv4: string;
    ipv6: string;
    privacy: 'public' | 'private' | 'restricted';
    autoConnect: boolean;
    metered: boolean;
  };
  vpn: {
    name: string;
    gateway: string;
    allowedScan: boolean;
    dns: string;
    random1: boolean;
    protocol: 'openvpn' | 'l2tp' | 'ikev2';
  }
};

export type MonitorConfig = {
  enabled: boolean;
  refreshRate: number;
  resolution: string;
  orientation: 'horizontal' | 'vertical';
  adaptiveSync: {
    gsync: boolean;
    freesync: boolean;
  }
};

export type ScreenSettings = {
  shared: {
    name: string;
    nocturne: boolean;
  }
  primary: MonitorConfig;
  secondary: MonitorConfig;
}

export type UserSettings = {
  personal: {
    name: string;
    email: string;
    phone: string;
    married: boolean;
    address: string;
    city: string;
  };
  security: {
    password: string;
    twoFactor: boolean;
  },
  preferences: {
    darkMode: boolean;
    language: string;
    notifications: boolean;
  }
};

export type SettingsState = {
  network: NetworkSettings;
  screen: ScreenSettings;
  user: UserSettings;
}
