import React from 'react';
import styled from 'styled-components';

export type BadgeVariants = 'default' | 'info' | 'success' | 'error';

const Container = styled.div<{ $type: BadgeVariants }>`
  border-radius: 2px;
  padding: 2px 8px;
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
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
}

function Badge({ variant = 'default', value, onClick, className }: BadgeProps) {
  return (
    <Container $type={variant} onClick={onClick} className={className}>
      {value}
    </Container>
  );
}

export default Badge;
