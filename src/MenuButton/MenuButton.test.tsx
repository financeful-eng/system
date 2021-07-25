import React from 'react';
import { render, screen } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import { MenuButton, MenuItem, MenuButtonProps } from './MenuButton';

describe('Menu Button header', () => {
  it('Accepts and renders a ComponentType for the header prop', () => {
    renderTestMenu({
      header: HeaderComp,
      defaultText: 'Actions',
    });

    const button = screen.getByRole('button', { name: 'Actions' });

    userEvent.click(button);
    expect(screen.getByTestId('header-comp')).toBeInTheDocument();
    expect(screen.getByText('This is a header', { exact: true })).toBeVisible();
  });

  it('Accepts and renders a string for the header prop', () => {
    renderTestMenu({
      header: 'Hello world',
      defaultText: 'Actions',
    });

    userEvent.click(screen.getByRole('button', { name: 'Actions' }));
    expect(screen.getByText('Hello world')).toBeVisible();
  });
});

describe('useSelectedItemAsText prop', () => {
  it('Changes the text of the button to the selected item text', () => {
    renderTestMenu({
      defaultText: 'Actions',
      useSelectedItemAsText: true,
    });

    const button = screen.getByRole('button', { name: 'Actions' });
    const firstItemText = 'Item one';
    userEvent.click(button);

    const firstItem = screen.getByText(firstItemText);
    userEvent.click(firstItem);

    expect(button).toHaveTextContent(firstItemText);
  });
  it('Does not change the button text when prop is undefined/false', () => {
    renderTestMenu({ defaultText: 'Actions' });
    const button = screen.getByRole('button', { name: 'Actions' });

    userEvent.click(button);
    userEvent.click(screen.getByText('Item one'));
    expect(button).toHaveTextContent('Actions');
  });
});

/////////////////////////////////////////////////////////////////////////////////////////

function HeaderComp() {
  return <div data-testid="header-comp">This is a header</div>;
}

const renderTestMenu = (props?: Omit<MenuButtonProps, 'buttonProps' | 'children'>) => {
  const onSelect = jest.fn();

  const utils = render(
    <MenuButton {...(props as MenuButtonProps)} buttonProps={{ variant: 'secondary' }}>
      <MenuItem onSelect={onSelect}>Item one</MenuItem>
      <MenuItem onSelect={onSelect}>Item two</MenuItem>
      <MenuItem onSelect={onSelect}>Item three</MenuItem>
    </MenuButton>,
  );

  return { ...utils };
};
