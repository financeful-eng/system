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

export interface AlertStates {
  info: BadgeProps;
  default: BadgeProps;
  error: BadgeProps;
  success: BadgeProps;
  warning: BadgeProps;
}

export interface FlashProps extends BadgeProps {
  border: string;
  icon?: string;
}

/**
 * Change the type of Keys of T from NewType
 */
export type ChangeTypeOfKeys<T extends object, Keys extends keyof T, NewType> = {
  // Loop to every key. We gonna check if the key
  // is assignable to Keys. If yes, change the type.
  // Else, retain the type.
  [key in keyof T]: key extends Keys ? NewType : T[key];
};

type AlertWithoutDefault = Omit<AlertStates, 'default'> & {
  warning: FlashProps;
};

/** Takes each key from AlertWithoutDefault, which are the keys of AlertStates minus "default"
 * and changes them to FlashProps -- which basically just adds
 * a border and icon(optional) property
 */
type FlashColors = ChangeTypeOfKeys<
  AlertWithoutDefault,
  keyof AlertWithoutDefault,
  FlashProps
>;

export interface Elements {
  input: string;
  drawer: string;
  drawerActive: string;
  badge: AlertStates;
  flash: FlashColors;
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
    name: string;
    isDark: boolean;
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
