import type { DefaultTheme } from 'styled-components';
import type { ElevationOverlay } from '../@types/styled';

const surfaces: ElevationOverlay = {
  '0': '#121212',
  '1': 'linear-gradient(0deg, #E5E5E5, #E5E5E5), #121212',
  '2': 'linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07)), #121212',
  '3': 'linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), #121212',
  '4': 'linear-gradient(0deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09)), #121212',
  '6': 'linear-gradient(0deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11)), #121212',
  '8': 'linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #121212',
  '12': 'linear-gradient(0deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14)), #121212',
  '16': 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), #121212',
  '24': 'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16)), #121212',
};

const darkTheme: DefaultTheme = {
  background: '#23242C',
  surfaces,
  colors: {
    gray: {
      '100': '#303236',
      '200': '#262A2D',
      '300': '#23262A',
      '400': '#1F2326',
      '500': '#1B1D1F',
      '600': '#161819',
    },
    blue: {
      '100': '#92C855',
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
  },
};

export { darkTheme };
