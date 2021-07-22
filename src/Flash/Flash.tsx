import React from 'react';
import styled from 'styled-components';
import type { DefaultTheme } from 'styled-components';
import type {
  FlashProps as FlashColorOptions,
  Elements,
  AlertWithoutDefault,
} from '../.types/styled';
import type { WithChildren } from '../.types/props';

export type FlashVariants = keyof AlertWithoutDefault;

const getColors = (theme: DefaultTheme, key: FlashVariants): FlashColorOptions => {
  const flash = theme.colors.elements.flash;
  return {
    bg: flash[key].bg,
    text: flash[key].text,
    border: flash[key].border,
    icon: flash[key].icon ? flash[key].icon : flash[key].text,
  };
};

const getRootStyles = (theme: DefaultTheme, key: FlashVariants) => {
  const { text, bg, border, icon } = getColors(theme, key);

  return `
    background-color: ${bg};
    border-color: ${border};
    color: ${text};
    svg {
      color: ${icon};
    }
  `;
};

const FlashRoot = styled.div<{ $variant: FlashVariants; full: boolean }>`
  width: 100%;
  padding: 16px;
  font-family: inherit;
  font-size: 0.875rem;
  letter-spacing: -0.15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: ${(props) => (props.full ? '1px 0px' : '1px')};
  border-radius: ${(props) => (props.full ? '0' : '6px')};
  margin-top: ${(props) => (props.full ? '-1px' : '0')};

  .Flash-Icon {
    margin-right: 8px;
    height: 16px;
    width: 16px;
  }

  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    width: calc(100% - 24px);
  }

  ${(props) => {
    switch (props.$variant) {
      case 'info':
        return getRootStyles(props.theme, 'info');
      case 'error':
        return getRootStyles(props.theme, 'error');
      case 'success':
        return getRootStyles(props.theme, 'success');
      case 'warning':
        return getRootStyles(props.theme, 'warning');
    }
  }}
`;

const ExitButton = styled.button`
  appearance: none;
  border: none;
  text-align: center;
  background: transparent;
  color: inherit;
  padding: 4px;

  cursor: pointer;
`;

type ExitOptions =
  | { canExit?: false; onDismiss?: never }
  | { canExit: true; onDismiss: () => void };

export interface FlashDefaultProps extends WithChildren {
  variant?: FlashVariants;
  icon?: React.ComponentType<{ className?: string }>;
  fullWidth?: boolean;
}

export type FlashProps = FlashDefaultProps & ExitOptions;

const Flash = React.forwardRef<HTMLDivElement, FlashProps>(function Flash(
  {
    variant = 'info',
    icon: IconComponent,
    children,
    fullWidth = false,
    canExit,
    onDismiss,
  }: FlashProps,
  ref,
) {
  return (
    <FlashRoot $variant={variant} ref={ref} full={fullWidth}>
      {IconComponent && <IconComponent className="Flash-Icon" />}
      <div className="text">
        <span>{children}</span>
        {canExit && <ExitButton onClick={onDismiss}>X</ExitButton>}
      </div>
    </FlashRoot>
  );
});

export default Flash;
