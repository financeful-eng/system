import React from 'react';
// import { render } from '@test-utils';
import { render } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import { MenuButton, MenuItem, MenuButtonProps } from './MenuButton';

// It accepts both a string and a component in the header prop

// The useSelectedText... prop works and renders the text in the <button></button>

function HeaderComp() {
  return <div data-testid="header-comp">This is a header</div>;
}

function Menu({ header }: { header: MenuButtonProps['header'] }) {
  const onSelect = jest.fn();
  return (
    <MenuButton
      defaultText="Actions"
      header={header}
      buttonProps={{ variant: 'secondary' }}
    >
      <MenuItem onSelect={onSelect}>Item one</MenuItem>
      <MenuItem onSelect={onSelect}>Item two</MenuItem>
      <MenuItem onSelect={onSelect}>Item three</MenuItem>
    </MenuButton>
  );
}

describe('Menu Button header', () => {
  it('Accepts and renders a ComponentType for the header prop', () => {
    const { getByTestId, getByRole, getByText } = render(<Menu header={HeaderComp} />);

    const button = getByRole('button');

    userEvent.click(button);
    expect(getByTestId('header-comp')).toBeInTheDocument();
    expect(getByText('This is a header', { exact: true })).toBeVisible();
  });
});
