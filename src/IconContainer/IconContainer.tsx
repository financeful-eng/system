import * as React from 'react';
import styled from 'styled-components';
import VisuallyHidden from '@reach/visually-hidden';

export type IconContainerVariants = 'round' | 'square';
export type IconContainerSizes = 'medium' | 'large';

type ContainerProps = {
  $size: IconContainerSizes;
  $shape: IconContainerVariants;
  iconColor?: string;
  bgColor?: string;
};

const Container = styled.div<ContainerProps>`
  background: ${({ theme, bgColor }) => (bgColor ? bgColor : theme.surfaces[1])};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${({ theme, iconColor }) =>
      iconColor ? iconColor : theme.colors.onSurface.medium};
  }
  ${(props) => {
    switch (props.$size) {
      case 'medium':
        return `
          height: 32px;
          width: 32px;
          svg {
            height: 16px;
            width: 16px;
          }
        `;
      case 'large':
        return `
          height: 40px;
          width: 40px;
          svg {
            height: 24px;
            width: 24px;
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.$shape) {
      case 'round':
        return `
            border-radius: 9999px;
          `;
      case 'square':
        return `
            border-radius: 8px;
          `;
    }
  }}
`;

//TODO: Add Visually Hidden from @reach ui

export interface IconContainerProps {
  variant?: IconContainerVariants;
  size?: IconContainerSizes;
  icon: React.ComponentType;
  bgColor?: string;
  iconColor?: string;
  /* 
    This text is for screen readers. They will ignore
    the svg component and read the hidden text. The browser will 
    display the svg and ignore the hidden text
  */
  hiddenText: string;
}

function IconContainer({
  variant = 'round',
  size = 'large',
  icon: IconComponent,
  bgColor,
  iconColor,
  hiddenText,
}: IconContainerProps) {
  return (
    <Container $shape={variant} $size={size} bgColor={bgColor} iconColor={iconColor}>
      <VisuallyHidden>{hiddenText}</VisuallyHidden>
      <IconComponent />
    </Container>
  );
}

export default IconContainer;
