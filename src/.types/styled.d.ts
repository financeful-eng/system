import 'styled-components';

export interface ColorRange {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
}

export interface ElevationVariant {
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

export interface Devices {
  mobile: string;
  tabletSmall: string;
  tabletLarge: string;
  laptop: string;
  desktop: string;
}

interface ElementState {
  hover: string;
  focused: string;
  dragged: string;
  selected: string;
}

interface OverlayStates {
  primary: ElementState;
  white: ElementState;
}

interface Emphasis {
  high: string;
  medium: string;
  disabled: string;
}

interface BadgeProps {
  bg: string;
  text: string;
}

interface Elements {
  input: string;
  drawer: string;
  drawerActive: string;
  badge: {
    info: BadgeProps;
    default: BadgeProps;
    error: BadgeProps;
    success: BadgeProps;
  };
  button: {
    strokeSecondary: string;
  };
}

interface Text {
  primary: string;
  secondary: string;
  danger: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    border: string;
    surfaces: ElevationVariant;
    elevation: ElevationVariant;
    overlay: OverlayStates;
    devices: Devices;
    text: Text;
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
      onSurface: Emphasis;
      elements: Elements;
    };
  }
}
