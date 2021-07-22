import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../themes/darkTheme';
import { lightTheme } from '../themes/lightTheme';

const themes = [darkTheme, lightTheme];

addDecorator(withThemesProvider(themes), ThemeProvider);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
