import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100vh;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.elevation[16]};
  /* background: ${({ theme }) => theme.surfaces[16]}; */
  background: ${({ theme }) => theme.colors.gray[500]};
`;

const Brand = styled.div`
  max-height: 56px;
  height: 56px;
`;

const Footer = styled.div`
  max-height: 56px;
  height: 56px;
`;

export const Section = styled.div`
  width: 100%;
`;

export interface ChildrenProps {
  children: React.ReactNode;
}

export function SidebarSection({ children }: ChildrenProps) {
  return <Section>{children}</Section>;
}

export function SidebarBrand({ children }: ChildrenProps) {
  return <Brand>{children}</Brand>;
}

export function SidebarFooter({ children }: ChildrenProps) {
  return <Footer>{children}</Footer>;
}

export function Sidebar({ children }: ChildrenProps) {
  return <Container>{children}</Container>;
}
