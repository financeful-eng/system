import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { darkTheme } from '../themes/darkTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return <SCThemeProvider theme={darkTheme}>{children}</SCThemeProvider>;
}

export default ThemeProvider;
