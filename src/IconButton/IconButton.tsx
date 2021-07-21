import React from 'react';
import styled from 'styled-components';
import type { WithChildren } from '../.types/props';
import VisuallyHidden from '@reach/visually-hidden';

export type IconButtonVariants = 'round' | 'square';

const ButtonRoot = styled.button<{ $shape: IconButtonVariants }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  appearance: none;
  white-space: nowrap;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.text.secondary};
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: background-color, color;
  cursor: pointer;
  box-sizing: border-box;
  font-size: 1.5rem;
  :disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  & > svg {
    height: 24px;
    width: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    fill: currentColor;
  }
  :hover {
    background-color: ${(props) => props.theme.overlay.white.hover};
    color: ${(props) => props.theme.text.primary};
  }
  :focus {
    box-shadow: 0px 0px 0px 3px rgba(48, 54, 61, 0.4);
  }
  ${(props) => {
    switch (props.$shape) {
      case 'round':
        return `
          border-radius: 9999px;
          height: 40px;
          width: 40px;
        `;
      case 'square':
        return `
          border: 1px solid ${props.theme.colors.elements.button.strokeSecondary};
          border-radius: 6px;
          box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.04);
          height: 32px;
          width: 32px;
          `;
    }
  }}
`;

type NativeButtonProps = React.AllHTMLAttributes<HTMLButtonElement>;

export interface IconButtonProps extends WithChildren {
  shape: IconButtonVariants;
  onClick: NativeButtonProps['onClick'];
  disabled?: boolean;
  'data-testid'?: string;
  type?: 'button' | 'submit';
  'aria-controls'?: NativeButtonProps['aria-controls'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  tabIndex?: NativeButtonProps['tabIndex'];
  hiddenText: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    { children, shape, onClick, type = 'button', hiddenText, ...rest }: IconButtonProps,
    ref,
  ) {
    return (
      <ButtonRoot
        {...rest}
        $shape={shape}
        ref={ref}
        data-testid={rest['data-testid']}
        type={type}
        onClick={onClick}
      >
        <VisuallyHidden>{hiddenText}</VisuallyHidden>
        {children}
      </ButtonRoot>
    );
  },
);

export default IconButton;
