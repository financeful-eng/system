import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

export type BadgeVariants = 'default' | 'info' | 'success' | 'error';

const Container = styled.div<{ $type: BadgeVariants }>`
  border-radius: 2px;
  padding: 4px 8px;
  font-size: 12px;
  ${(props) => {
    switch (props.$type) {
      case 'default':
        return `
          background: ${props.theme.colors.elements.badge.default.bg};
          color: ${props.theme.colors.elements.badge.default.text};
        `;
      case 'error':
        return `
          background: ${props.theme.colors.elements.badge.error.bg};
          color: ${props.theme.colors.elements.badge.error.text};
        `;
      case 'info':
        return `
          background: ${props.theme.colors.elements.badge.info.bg};
          color: ${props.theme.colors.elements.badge.info.text};
        `;
      case 'success':
        return `
          background: ${props.theme.colors.elements.badge.success.bg};
          color: ${props.theme.colors.elements.badge.success.text};
        `;
    }
  }}
`;

export interface BadgeProps {
  variant?: BadgeVariants;
  value: string;
}

function Badge({ variant = 'default', value }: BadgeProps) {
  return <Container $type={variant}>{value}</Container>;
}

export default Badge;
