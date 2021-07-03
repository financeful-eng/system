import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

type TextVariants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';
type ColorVariants = 'high' | 'medium' | 'disabled';

export interface TextProps {
  variant: TextVariants;
  as: React.ElementType<any>;
  emphasis?: ColorVariants;
  children: React.ReactNode;
}

const handleEmphasis = (val: ColorVariants, theme: DefaultTheme) => {
  switch (val) {
    case 'high':
      return theme.colors.onSurface.high;
    case 'medium':
      return theme.colors.onSurface.medium;
    case 'disabled':
      return theme.colors.onSurface.disabled;
    default:
      return theme.colors.onSurface.medium;
  }
};

const StyledText = styled.div<{ $variant: TextVariants; $emphasis: ColorVariants }>`
  color: ${(props) => handleEmphasis(props.$emphasis, props.theme)};
  ${(props) => {
    switch (props.$variant) {
      case 'h1':
        return `
          font-size: 96px;
          font-weight: light;
          letter-spacing: -1.5%;
        `;
      case 'h2':
        return `
          font-size: 60px;
          font-weight: light;
          letter-spacing: -0.5%;
        `;
      case 'h3':
        return `
        font-size: 48px;
          font-weight: light;
          letter-spacing: 0;
        `;
      case 'h4':
        return `
          font-size: 34px;
          font-weight: 400;
          letter-spacing: 0.25%;
        `;
      case 'h5':
        return `
        font-size: 24px;
          font-weight: 400;
          letter-spacing: 0;
        `;
      case 'h6':
        return `
          font-size: 20px;
          font-weight: 500;
          letter-spacing: 0.15%;
        `;
    }
  }}
`;

function Text({ variant, emphasis = 'medium', as, children }: TextProps) {
  return (
    <StyledText $emphasis={emphasis} $variant={variant} as={as}>
      {children}
    </StyledText>
  );
}

export default Text;
