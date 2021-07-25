import React from 'react';
import { render } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import { MenuButton, MenuItem, MenuButtonProps } from './MenuButton';

describe('Menu Button header', () => {
  it('Accepts and renders a ComponentType for the header prop', () => {
    const { getByTestId, getByRole, getByText } = renderTestMenu({
      header: HeaderComp,
      defaultText: 'Actions',
    });

    const button = getByRole('button', { name: 'Actions' });

    userEvent.click(button);
    expect(getByTestId('header-comp')).toBeInTheDocument();
    expect(getByText('This is a header', { exact: true })).toBeVisible();
  });

  it('Accepts and renders a string for the header prop', () => {
    const { getByRole, getByText } = renderTestMenu({
      header: 'Hello world',
      defaultText: 'Actions',
    });

    userEvent.click(getByRole('button', { name: 'Actions' }));
    expect(getByText('Hello world')).toBeVisible();
  });
});

describe('useSelectedItemAsText prop', () => {
  it('Changes the text of the button to the selected item text', () => {
    const { getByText, getByRole } = renderTestMenu({
      defaultText: 'Actions',
      useSelectedItemAsText: true,
    });

    const button = getByRole('button', { name: 'Actions' });
    const firstItemText = 'Item one';
    userEvent.click(button);

    const firstItem = getByText(firstItemText);
    userEvent.click(firstItem);

    expect(button).toHaveTextContent(firstItemText);
  });
  it('Does not change the button text when prop is undefined/false', () => {
    const { getByText, getByRole } = renderTestMenu({ defaultText: 'Actions' });
    const button = getByRole('button', { name: 'Actions' });

    userEvent.click(button);
    userEvent.click(getByText('Item one'));
    expect(button).toHaveTextContent('Actions');
  });
});

/////////////////////////////////////////////////////////////////////////////////////////

function HeaderComp() {
  return <div data-testid="header-comp">This is a header</div>;
}

const renderTestMenu = (props?: Omit<MenuButtonProps, 'buttonProps' | 'children'>) => {
  const onSelect = jest.fn();

  const container = render(
    <MenuButton {...(props as MenuButtonProps)} buttonProps={{ variant: 'secondary' }}>
      <MenuItem onSelect={onSelect}>Item one</MenuItem>
      <MenuItem onSelect={onSelect}>Item two</MenuItem>
      <MenuItem onSelect={onSelect}>Item three</MenuItem>
    </MenuButton>,
  );

  return { ...container };
};
