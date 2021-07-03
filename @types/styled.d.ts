import 'styled-components';

interface ColorRange {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
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
