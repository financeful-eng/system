import * as React from 'react';
import styled, { css } from 'styled-components';
import { WithChildren } from '../.types/props';

type RootProps = {
  $padding: boolean;
  onSurface: boolean;
};

const StyledList = styled.ul<RootProps>`
  padding: ${({ $padding }) => ($padding ? '8px 0' : '0')};
  list-style: none;

  ${({ onSurface, theme }) =>
    onSurface &&
    css`
      background: ${theme.surfaces[1]};
    `}
`;

interface ListProps extends WithChildren {
  className?: string;
  padding?: boolean;
  onSurface?: boolean;
}

const List = React.forwardRef<HTMLUListElement, ListProps>(function List(
  { className, padding = true, onSurface = true, children },
  forwardRef,
) {
  return (
    <StyledList
      $padding={padding}
      onSurface={onSurface}
      className={className}
      ref={forwardRef}
    >
      {children}
    </StyledList>
  );
});

/////////////////////////////////////////////////////////////////////////////////
// List Item

type ItemRootProps = {
  withGutters: boolean;
  $selected: boolean;
  canHover: boolean;
};

const Item = styled.li<ItemRootProps>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  :hover {
    background: ${({ canHover, theme }) =>
      canHover ? theme.overlay.white.hover : undefined};
    cursor: ${({ canHover }) => (canHover ? 'pointer' : 'inherit')};
  }

  ${({ withGutters }) =>
    withGutters &&
    css`
      padding-right: 16px;
      padding-left: 16px;
    `}

  ${({ $selected, theme }) =>
    $selected &&
    css`
      background: ${theme.overlay.white.selected};
    `}
`;

interface ListItemProps extends WithChildren {
  /**  Used to apply 16px padding on left & right */
  gutters?: boolean;
  /**  If selected, different styles will be applied to represent selection */
  selected?: boolean;
  /**  If hoverable a white overlay will be added on hover */
  hoverable?: boolean;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(function ListItem(
  { children, gutters = true, selected = false, hoverable = true },
  forwardRef,
) {
  return (
    <Item
      withGutters={gutters}
      ref={forwardRef}
      $selected={selected}
      canHover={hoverable}
    >
      {children}
    </Item>
  );
});

export { List, ListItem };
export type { ListProps, ListItemProps };
