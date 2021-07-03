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
  background: ${({ theme }) => theme.surfaces[16]};
`;

const Brand = styled.div`
  padding: 8px;
  height: 56px;
`;

const Footer = styled.div`
  padding: 8px;
  height: 56px;
`;

const Nav = styled.nav`
  padding: 8px 0;
`;

const Section = styled.div`
  width: 100%;
`;

interface SidebarProps {
  children: React.ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return (
    <Container>
      <Section>
        <Brand>financeful</Brand>
        <nav>{children}</nav>
      </Section>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default Sidebar;
