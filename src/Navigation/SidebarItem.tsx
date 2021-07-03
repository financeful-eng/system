import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 36px;
  padding: 8px;
  border-left: 1px solid transparent;
  color: ${({ theme }) => theme.colors.onSurface.medium};
  display: flex;
  align-items: center;

  :hover {
    background: ${({ theme }) => theme.overlay.white.hover};
  }

  & .SidebarItem-icon {
    fill: currentColor;
    height: 24px;
    width: 24px;
    margin-right: 24px;
  }
`;

export interface SidebarItemProps {
  icon: React.ComponentType<{ className?: string }>;
}

function SidebarItem({ icon: IconComp }: SidebarItemProps) {
  return (
    <Container>
      <IconComp className="SidebarItem-icon" />
      Nav Item
    </Container>
  );
}

export default SidebarItem;
