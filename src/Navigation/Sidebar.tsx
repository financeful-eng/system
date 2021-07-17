import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text';

const LabelContainer = styled.div`
  padding: 0 8px;
`;

const Brand = styled.div`
  max-height: 56px;
  height: 56px;
`;

const Footer = styled.div`
  max-height: 56px;
  height: 56px;
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const Content = styled.div`
  width: 100%;
`;

const Section = styled.div<{ hideOnMobile: boolean }>`
  width: 100%;
  padding: 8px 16px;
  & ${LabelContainer} {
    padding: 8px 0px;
  }

  @media ${({ theme }) => theme.devices.mobile} {
    display: ${({ hideOnMobile }) => (hideOnMobile ? 'none !important' : 'inherit')};
  }
`;

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
  overflow-x: hidden;
  box-shadow: ${({ theme }) => theme.elevation[16]};
  background: ${({ theme }) => theme.colors.elements.drawer};

  @media ${({ theme }) => theme.devices.tabletSmall} {
    width: 72px;

    ${LabelContainer} {
      display: none;
    }
  }

  @media ${({ theme }) => theme.devices.mobile} {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: auto;
    /* flex-direction: row;
    justify-content: space-between; */
    height: 56px;

    ${Brand}, ${LabelContainer}, ${Footer} {
      display: none;
    }

    ${Section} {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export interface ChildrenProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: ChildrenProps) {
  return (
    <LabelContainer>
      <Text variant="caption" emphasis="secondary" as="h3">
        {children}
      </Text>
    </LabelContainer>
  );
}

export type SectionProps = ChildrenProps & {
  hideOnMobile?: boolean;
};
export function SidebarSection({ children, hideOnMobile = false }: SectionProps) {
  return <Section hideOnMobile={hideOnMobile}>{children}</Section>;
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
