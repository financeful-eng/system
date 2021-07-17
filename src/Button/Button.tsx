import React from 'react';
import styled, { css } from 'styled-components';

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'outline';

type StyleProps = {
  $variant: ButtonVariants;
  hasIcon: boolean;
  fullWidth: boolean;
};
const StyledButton = styled.button<StyleProps>`
  --blue: ${({ theme }) => theme.colors.blue[400]};
  --blue-hover: #1e73da;
  --secondary: ${({ theme }) => theme.colors.gray[100]};
  --secondary-hover: ${({ theme }) => theme.colors.gray[200]};
  --outline-bg: ${({ theme }) => theme.background};
  --border: #333b42;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  white-space: nowrap;
  padding: 6px 16px;
  border-radius: 6px;
  max-height: 32px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: background-color, color;
  font-family: inherit;
  box-shadow: 0px 1px 0px 0px rgba(27, 31, 35, 0.1);

  & > span {
    width: 100%;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  :disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .Button-icon {
    margin-right: 8px;
    height: 16px;
    width: 16px;
    fill: currentColor;
  }

  ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return `
        background: var(--blue);
        border: 1px solid var(--blue-hover);
        :hover {
          background: var(--blue-hover);
        }
        :focus {
          box-shadow: 0px 0px 0px 3px rgba(0, 92, 197, 0.4);
        }
        
      `;
      case 'secondary':
        return `
          background: var(--secondary);
          border: 1px solid var(--border);
          :hover  {
              background: var(--secondary-hover);
            }
          :focus {
            box-shadow: 0px 0px 0px 3px rgba(48, 54, 61, 0.4);
          }
       `;
      case 'danger':
        return `
          border: 1px solid var(--border);
          background: var(--outline-bg);
          color: ${props.theme.text.danger};
          :hover {
            background:#CB2431;
            color: #fff;
          }
          :focus {
           box-shadow: 0px 0px 0px 3px rgba(203, 36, 49, 0.4);

          }
        `;
      case 'outline':
        return `
           border: 1px solid var(--border);
           background: transparent;
           color: #fff;

           :hover {
             background:${props.theme.overlay.white.hover};
           }
           :focus {
            box-shadow: 0px 0px 0px 3px rgba(0, 92, 197, 0.4);
          }
        `;
    }
  }}
`;

type NativeButtonProps = React.AllHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps {
  onClick: NativeButtonProps['onClick'];
  variant?: ButtonVariants;
  disabled?: boolean;
  'data-testid'?: string;
  icon?: React.ComponentType<{ className?: string }>;
  type?: 'button' | 'submit';
  fullWidth?: boolean;
  children: React.ReactNode;
  'aria-controls'?: NativeButtonProps['aria-controls'];
  'aria-expanded'?: NativeButtonProps['aria-expanded'];
  'aria-describedby'?: NativeButtonProps['aria-describedby'];
  tabIndex?: NativeButtonProps['tabIndex'];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    onClick,
    children,
    variant = 'primary',
    disabled,
    type = 'button',
    icon: IconComponent,
    fullWidth = false,
    ...props
  }: ButtonProps,
  ref,
) {
  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      data-testid={props['data-testid']}
      disabled={disabled}
      hasIcon={!!IconComponent}
      type={type}
      fullWidth={fullWidth}
      ref={ref}
      {...props}
    >
      {IconComponent && <IconComponent className="Button-icon" />}
      {children}
    </StyledButton>
  );
});

export default Button;
