import React from 'react';
import styled from 'styled-components';
import { Text, TextProps } from '../Text';

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
  margin-top: 16px;
`;

export const Content = styled.div`
  width: 100%;
`;

const LabelContainer = styled.div`
  padding: 0 16px;
`;

const Section = styled.div`
  width: 100%;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.onSurface.disabled};
  & ${LabelContainer} {
    padding: 8px 16px;
  }
`;

export interface ChildrenProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: ChildrenProps) {
  return (
    <LabelContainer>
      <Text variant="button" emphasis="medium" as="h3">
        {children}
      </Text>
    </LabelContainer>
  );
}

export function SidebarSection({ children }: ChildrenProps) {
  return <Section>{children}</Section>;
}

export function SidebarContent({ children }: ChildrenProps) {
  return <Content>{children}</Content>;
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
