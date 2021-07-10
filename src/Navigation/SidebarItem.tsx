import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

const Styles = styled.div`
  height: 36px;
  border-radius: 6px;
  width: 208px;
  color: ${({ theme }) => theme.text.secondary};
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  :hover {
    background: ${({ theme }) => theme.colors.elements.drawerActive};
  }

  & .SidebarItem-icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
    margin-right: 24px;
    vertical-align: middle;
    margin-left: 8px;
  }

  & .active {
    background: ${({ theme }) => theme.colors.elements.drawerActive};
  }

  @media ${({ theme }) => theme.devices.tabletSmall},
    ${({ theme }) => theme.devices.mobile} {
    width: 40px;
    & .text {
      display: none;
    }
  }

  @media ${({ theme }) => theme.devices.mobile} {
    & nav {
      display: flex;
      flex-direction: row;
    }
  }
`;

export interface SidebarItemProps<T extends React.ElementType = React.ElementType> {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  onClick?: () => void;
  className?: string;
  as?: T;
}

export type ItemProps<T extends React.ElementType> = SidebarItemProps<T> &
  Omit<React.ComponentProps<T>, keyof SidebarItemProps>;

const defaultElement = 'div';

function SidebarItem<T extends React.ElementType = typeof defaultElement>({
  icon: IconComp,
  onClick,
  className,
  text,
  as,
}: ItemProps<T>) {
  const Comp = as || 'div';
  return (
    <Styles className={className} onClick={onClick}>
      <Comp className="Item-Comp">
        <IconComp className="SidebarItem-icon" />
        <Text variant="subtitle2" emphasis="secondary" as="span" className="text">
          {text}
        </Text>
      </Comp>
    </Styles>
  );
}

export default SidebarItem;
