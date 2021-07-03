import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  height: 40px;
  padding: 0 24px;
  border-left: 2px solid transparent;
  color: ${({ theme }) => theme.colors.onSurface.medium};
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: center;
  :hover {
    background: ${({ theme }) => theme.overlay.white.hover};
  }

  & .SidebarItem-icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
    margin-right: 24px;
    vertical-align: middle;
  }

  & .active {
    border-left-color: ${({ theme }) => theme.colors.blue[400]};
    background: ${({ theme }) => theme.overlay.white.selected};
  }
`;

export interface SidebarItemProps<T extends React.ElementType = React.ElementType> {
  icon: React.ComponentType<{ className?: string }>;
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
  as,
}: ItemProps<T>) {
  const Comp = as || 'div';
  return (
    <Styles className={className} onClick={onClick}>
      <Comp className="Item-Comp">
        <IconComp className="SidebarItem-icon" />
        Nav Item
      </Comp>
    </Styles>
  );
}

export default SidebarItem;
