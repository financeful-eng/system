import * as React from 'react';
import styled, { css } from 'styled-components';
import { WithChildren } from '../.types/props';
import { IconContainer } from '../IconContainer';
import type { IconContainerProps } from '../IconContainer';
import { Text } from '../Text';

type RootProps = {
  $padding: boolean;
  withSurface: boolean;
  withBorder: boolean;
};

const StyledList = styled.ul<RootProps>`
  padding: ${({ $padding }) => ($padding ? '8px 0' : '0')};
  list-style: none;
  text-align: left;
  position: relative;
  ${({ withSurface, theme }) =>
    withSurface &&
    css`
      background: ${theme.surfaces[1]};
    `}

  ${({ withBorder, theme }) =>
    withBorder &&
    css`
      & li:not(:last-child) {
        border-bottom: 1px solid ${theme.border};
      }
    `}
`;

interface ListProps extends WithChildren {
  className?: string;
  padding?: boolean;
  withSurface?: boolean;
  withBorders?: boolean;
}

const List = React.forwardRef<HTMLUListElement, ListProps>(function List(
  {
    className,
    padding = true,
    withSurface = true,
    children,
    withBorders = false,
    ...rest
  },
  forwardRef,
) {
  return (
    <StyledList
      {...rest}
      withBorder={withBorders}
      $padding={padding}
      withSurface={withSurface}
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
  position: relative;
  transition: background 0.2s ease-in;
  :hover {
    background: ${({ canHover, theme }) =>
      canHover
        ? theme.isDark
          ? theme.overlay.white.hover
          : theme.overlay.white.selected
        : undefined};
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
      background: ${theme.isDark
        ? theme.overlay.white.selected
        : theme.overlay.primary.focused};
    `}
`;

interface ListItemProps extends WithChildren {
  /**  Used to apply 16px padding on left & right */
  gutters?: boolean;
  /**  If selected, different styles will be applied to represent selection */
  selected?: boolean;
  /**  If hoverable a white overlay will be added on hover */
  hoverable?: boolean;
  className?: string;
}

const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(function ListItem(
  { children, gutters = true, selected = false, hoverable = true, className, ...rest },
  forwardRef,
) {
  return (
    <Item
      {...rest}
      className={className}
      withGutters={gutters}
      ref={forwardRef}
      $selected={selected}
      canHover={hoverable}
    >
      {children}
    </Item>
  );
});

/////////////////////////////////////////////////////////////////////////////////
// List Item Container

/** 
 * This Container is a wrapper around the Left Side avatar and text. To be used
 * when there is a n action icon/component on the right hand side
 * @example
 *  <ListItem>
 *    <ListItemContainer>
*       <ListItemIcon
            iconProps={{
              ...
            }}
          />
        <ListItemText primary="text" secondary="text" />
 *    </ListItemContainer>
      <ListItemAction>
        {...}
      </ListItemAction>
 * </ListItem>
 * */

const ListItemContainer = styled.div`
  padding-right: 48px;
  width: 100%;
  display: flex;
`;

ListItemContainer.displayName = 'ListItemContainer';

/////////////////////////////////////////////////////////////////////////////////
// List Item Avatar

const AvatarRoot = styled.div`
  flex-shrink: 0;
  margin-right: 16px;
`;

interface ListItemIconProps {
  /** Props passed to the <IconContainer /> component */
  iconProps: IconContainerProps;
  className?: string;
}

const ListItemIcon = React.forwardRef<HTMLDivElement, ListItemIconProps>(
  function ListItemIcon({ iconProps, className, ...rest }, forwardRef) {
    return (
      <AvatarRoot {...rest} ref={forwardRef} className={className}>
        <IconContainer {...iconProps} />
      </AvatarRoot>
    );
  },
);

/////////////////////////////////////////////////////////////////////////////////
// List Item Text

const TextRoot = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  margin-right: 8px;
`;

interface ListItemTextProps {
  primary: string;
  secondary?: string;
  className?: string;
}

const ListItemText = React.forwardRef<HTMLDivElement, ListItemTextProps>(
  function ListItemText({ primary, secondary, className, ...rest }, forwardRef) {
    return (
      <TextRoot {...rest} className={className} ref={forwardRef}>
        <Text variant="subtitle2" emphasis="high">
          {primary}
        </Text>
        <Text variant="caption" emphasis="medium">
          {secondary}
        </Text>
      </TextRoot>
    );
  },
);

/////////////////////////////////////////////////////////////////////////////////
// List Item Action

const ActionRoot = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`;

const ListItemAction = React.forwardRef<HTMLDivElement, WithChildren>(
  function ListItemActionProps({ children, ...rest }, forwardRef) {
    return (
      <ActionRoot {...rest} ref={forwardRef}>
        {children}
      </ActionRoot>
    );
  },
);

//TODO: Add border bottom prop;
export { List, ListItem, ListItemIcon, ListItemText, ListItemAction, ListItemContainer };
export type { ListProps, ListItemProps, ListItemIconProps, ListItemTextProps };
