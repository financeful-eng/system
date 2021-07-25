// test-utils.ts
import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement } from 'react';
import ThemeProvider from '../ThemeProvider';

const Wrapper: React.FC = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
