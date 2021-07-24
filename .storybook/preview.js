import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../src/themes/darkTheme';
import { lightTheme } from '../src/themes/lightTheme';

export const getAllThemes = () => {
  return [darkTheme, lightTheme];
};

addDecorator(withThemesProvider(getAllThemes()), ThemeProvider);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
