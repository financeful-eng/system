import 'styled-components';

export interface ColorRange {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
}

export interface ElevationOverlay {
  00: string;
  01: string;
  02: string;
  03: string;
  04: string;
  06: string;
  08: string;
  12: string;
  16: string;
  24: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    surfaces: ElevationOverlay;
    colors: {
      gray: ColorRange;
      blue: ColorRange;
      orange: ColorRange;
      turqoise: ColorRange;
      blurple: ColorRange;
      purple: ColorRange;
      red: ColorRange;
      yellow: ColorRange;
      green: ColorRange;
    };
  }
}
