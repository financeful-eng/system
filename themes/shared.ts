import { DefaultTheme } from 'styled-components';
import type { ElevationVariant, OverlayStates, Devices } from '../src/.types/styled';

export const devices: Devices = {
  mobile: '(max-width: 599px)',
  tabletSmall: '(min-width:600px) and (max-width: 904px)',
  tabletLarge: '(min-width: 905px) and (max-width: 1239px)',
  laptop: '(min-width: 1240px) and (max-width: 1439px)',
  desktop: '(min-width: 1440px)',
};

export const elevation: ElevationVariant = {
  '0': '0px 4px 4px rgba(0, 0, 0, 0.25)',
  '1': '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
  '2': '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
  '3': '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
  '4': '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
  '6': '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)',
  '8': '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
  '12': '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
  '16': '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
  '24': '0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)',
};

export const primaryOverlay: OverlayStates['primary'] = {
  hover: 'rgba(104, 178, 255, 0.04)',
  focused: 'rgba(104, 178, 255, 0.12)',
  dragged: 'rgba(104, 178, 255, 0.12)',
  selected: 'rgba(104, 178, 255, 0.08)',
};

type IColors = Omit<DefaultTheme['colors'], 'elements' | 'onSurface'>;

export const COLORS: IColors = {
  gray: {
    '100': '#303236',
    '200': '#262A2D',
    '300': '#23262A',
    '400': '#1F2326',
    '500': '#1B1D1F',
    '600': '#161819',
  },
  blue: {
    '100': '#92C8FF',
    '200': '#68B2FF',
    '300': '#4AA1FF',
    '400': '#3690FF',
    '500': '#3782F0',
    '600': '#3670DC',
  },
  green: {
    '100': '#8cffc1',
    '200': '#36ffa5',
    '300': '#00fb8c',
    '400': '#00f579',
    '500': '#00e36c',
    '600': '#00ce5e',
  },
  red: {
    '100': '#f59b9b',
    '200': '#ed7374',
    '300': '#f95251',
    '400': '#ff4036',
    '500': '#f03535',
    '600': '#de2a2f',
  },
  orange: {
    '100': '#ffca85',
    '200': '#ffb556',
    '300': '#ffa536',
    '400': '#fe9622',
    '500': '#fa8a21',
    '600': '#f37a1f',
  },
  purple: {
    '100': '#cd90ff',
    '200': '#b760ff',
    '300': '#a536ff',
    '400': '#9200fd',
    '500': '#7c00f7',
    '600': '#5900f1',
  },
  blurple: {
    '100': '#b19eff',
    '200': '#8D75ff',
    '300': '#6c56ff',
    '400': '#4036ff',
    '500': '#2932f8',
    '600': '#002af0',
  },
  turqoise: {
    '100': '#36f5ff',
    '200': '#00eefe',
    '300': '#0037fb',
    '400': '#00e0fa',
    '500': '#00cee6',
    '600': '#00b8c9',
  },
  yellow: {
    '100': '#f4fb90',
    '200': '#eff85c',
    '300': '#f5ff36',
    '400': '#f0fb00',
    '500': '#f7ea00',
    '600': '#fbd000',
  },
};
