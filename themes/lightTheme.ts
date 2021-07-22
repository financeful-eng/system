import type { DefaultTheme } from 'styled-components';
import type { Elements, OverlayStates, ElevationVariant } from '../src/.types/styled';
import { primaryOverlay, elevation, devices, COLORS } from './shared';

const overlay: OverlayStates = {
  primary: primaryOverlay,
  white: {
    hover: 'rgba(0, 0, 0, 0.16)',
    focused: 'rgba(0, 0, 0, 0.12)',
    dragged: 'rgba(0, 0, 0, 0.12)',
    selected: 'rgba(0, 0, 0, 0.08)',
  },
};

const badgeColors: Elements['badge'] = {
  default: {
    bg: 'rgba(0, 0, 0, 0.16)',
    text: 'rgba(0, 0, 0, 0.60)',
  },
  info: {
    bg: 'rgba(54, 144, 255, 0.25)',
    text: '#3690FF',
  },
  error: {
    bg: 'rgba(255, 64, 54, 0.25)',
    text: '#ff4036',
  },
  success: {
    bg: 'rgba(0, 245, 121, 0.25)',
    text: '#03A04B',
  },
  warning: {
    bg: '#FFF8C7',
    text: '#BB9439',
  },
};

const flashColors: Elements['flash'] = {
  info: {
    bg: '#DBEDFF',
    icon: 'rgba(4, 66, 137, 0.6)',
    text: '#24292E',
    border: 'rgba(4, 66, 137, 0.2)',
  },
  success: {
    bg: '#DCFFE4',
    border: 'rgba(23, 111, 44, 0.2)',
    text: '#24292E',
    icon: 'rgba(23, 111, 44, 0.8)',
  },
  error: {
    bg: '#FFE3E6',
    border: 'rgba(158, 28, 35, 0.2)',
    text: '#24292E',
    icon: 'rgba(158, 28, 35, 0.6)',
  },
  warning: {
    bg: '#FFFBDD',
    border: 'rgba(176, 136, 0, 0.2)',
    text: '#24292E',
    icon: '#B08800',
  },
};

const surfaces: ElevationVariant = {
  '0': '#FFFFFF',
  '1': '#FFFFFF',
  '2': '#FFFFFF',
  '3': '#FFFFFF',
  '4': '#FFFFFF',
  '6': '#FFFFFF',
  '8': '#FFFFFF',
  '12': '#FFFFFF',
  '16': '#FFFFFF',
  '24': '#FFFFFF',
};

const onSurface: DefaultTheme['colors']['onSurface'] = {
  high: 'rgba(0, 0, 0, 0.87)',
  medium: 'rgba(0, 0, 0, 0.6)',
  disabled: 'rgba(0, 0, 0, 0.38)',
};

const elements: Elements = {
  button: {
    strokeSecondary: '#D5D5D5', // lightTheme.border
  },
  badge: badgeColors,
  drawer: '#F0F2F5',
  drawerActive: overlay.primary.selected,
  flash: flashColors,
  input: '#F0F2F5',
};

export const lightTheme: DefaultTheme = {
  name: 'Light Theme',
  isDark: false,
  background: '#F0F2F5',
  border: '#D5D5D5',
  surfaces,
  elevation,
  overlay,
  devices,
  text: {
    primary: '#000000',
    secondary: onSurface.medium,
    danger: 'rgba(203, 36, 49, 1)',
  },
  colors: {
    elements,
    onSurface,
    ...COLORS,
  },
};
