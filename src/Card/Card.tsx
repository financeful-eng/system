import React from 'react';
import styled, { css } from 'styled-components';
import type { ElevationVariant } from '../.types/styled';
import type { WithChildren } from '../.types/props';

export type CardVariants = 'outlined' | 'contained';

type RootProps = {
  $elevation: keyof ElevationVariant;
  $variant: CardVariants;
};

const CardRoot = styled.div<RootProps>`
  overflow: hidden;
  background: ${({ theme }) => theme.surfaces[1]};
  border-radius: 4px;
  border: ${({ $variant, theme }) =>
    $variant === 'contained' ? 'none' : `1px solid ${theme.border}`};

  ${({ $elevation, $variant }) =>
    $elevation > 0 &&
    $variant === 'contained' &&
    css`
      box-shadow: ${({ theme }) => theme.elevation[$elevation]};
    `}
`;

export interface CardProps extends WithChildren {
  elevation?: keyof ElevationVariant;
  variant?: CardVariants;
  as?: React.ElementType;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  { elevation = 1, children, variant = 'contained', as = 'div' },
  ref,
) {
  return (
    <CardRoot $elevation={elevation} $variant={variant} ref={ref} as={as}>
      {children}
    </CardRoot>
  );
});

export default Card;
