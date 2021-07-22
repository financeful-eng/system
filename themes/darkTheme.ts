import type { DefaultTheme } from 'styled-components';
import type { ElevationVariant, OverlayStates, Elements } from '../src/.types/styled';
import { primaryOverlay, devices, elevation, COLORS } from './shared';

const surfaces: ElevationVariant = {
  '0': '#201E26',
  '1': 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), #201E26',
  '2': 'linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #201E26',
  '3': 'linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #201E26',
  '4': 'linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #201E26',
  '6': 'linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #201E26',
  '8': 'linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #201E26',
  '12': 'linear-gradient(0deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14)), #201E26',
  '16': 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #201E26',
  '24': 'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)), #201E26',
};

const overlay: OverlayStates = {
  primary: primaryOverlay,
  white: {
    hover: 'rgba(255, 255, 255, 0.04)',
    focused: 'rgba(255, 255, 255, 0.12)',
    dragged: 'rgba(255, 255, 255, 0.12)',
    selected: 'rgba(255, 255, 255, 0.08)',
  },
};

const flashColors: Elements['flash'] = {
  info: {
    bg: 'rgba(56, 139, 253, 0.1)',
    text: '#79C0FF',
    border: 'rgba(4, 66, 137, 0.2)',
  },
  success: {
    bg: 'rgba(33, 43, 41, 1)',
    text: '#56D364',
    border: 'rgba(46, 160, 67, 0.2)',
  },
  error: {
    bg: 'rgba(54, 35, 41, 1)',
    text: '#FF7B72',
    border: 'rgba(248, 81, 73, 0.4)',
  },
  warning: {
    bg: '#2F2823',
    border: 'rgba(176, 136, 0, 0.2)',
    text: '#E3B341',
  },
};

const badgeColors: Elements['badge'] = {
  info: {
    bg: 'rgba(54, 144, 255, 0.12)',
    text: '#79C0FF',
  },
  default: {
    bg: 'rgba(255, 255, 255, 0.04)',
    text: 'rgba(255, 255, 255, 0.6)',
  },
  error: {
    bg: 'rgba(255, 64, 54, 0.12)',
    text: 'rgba(255, 123, 114, 1)',
  },
  success: {
    bg: 'rgba(0, 245, 121, 0.12)',
    text: 'rgba(86, 211, 100, 1)',
  },
  warning: {
    bg: '#41362F',
    text: '#E3B341',
  },
};

const elements: Elements = {
  button: {
    strokeSecondary: '#333B42',
  },
  badge: badgeColors,
  drawer: '#1D1C22',
  drawerActive: '#27262C',
  flash: flashColors,
  input:
    'linear-gradient(0deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06)), #201E26',
};

const darkTheme: DefaultTheme = {
  name: 'Dark Theme',
  isDark: true,
  background: '#201E26',
  border: 'rgba(255, 255, 255, 0.12)',
  surfaces,
  elevation,
  overlay,
  devices,
  text: {
    primary: '#ffffff',
    secondary: '#666B72',
    danger: 'rgba(203, 36, 49, 1)',
  },
  colors: {
    elements,
    onSurface: {
      high: 'rgba(255, 255, 255, 0.87)',
      medium: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.38)',
    },
    ...COLORS,
  },
};

export { darkTheme };
