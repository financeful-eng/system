import React from 'react';
import styled from 'styled-components';
import { motion, MotionProps } from 'framer-motion';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import type { DialogProps } from '@reach/dialog';
import '@reach/dialog/styles.css';

import { Text } from '../Text';
import { IconButton } from '../IconButton';

const Overlay = styled(motion.div)<MotionProps>`
  background: rgba(0, 0, 0, 0.5);
  z-index: 1200;
  > [data-reach-dialog-content] {
    margin: 0;
  }
  @media (max-width: 705px) {
    > [data-reach-dialog-content] {
      margin: 0;
    }
  }
`;

const Content = styled(motion.div)<MotionProps>`
  background: ${({ theme }) => theme.surfaces[0]};
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  max-width: 450px;
  padding: 0;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.elevation[24]};
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  @media (max-width: 705px) {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
    min-width: 0;
  }
`;

interface DefaultProps extends DialogProps {
  ariaLabel: string;
  children: React.ReactNode;
}

export type PanelProps = Omit<
  DefaultProps,
  'isOpen' | 'allowPinchZoom' | 'unstable_lockFocusAcrossFrames'
>;

const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariant = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.3, delay: 0.1 },
  },
  exit: {
    x: '100vw',
    transition: { type: 'tween', duration: 0.3 },
  },
};
/**
 * @important
 * Must be a child of AnimatePresence for Exit animation to work
 *
 * @example
 * function Example(){
 *  const [displayPanel, setDisplayPanel] = React.useState(false)
 *
 *  return (
 *  <AnimatePresence>
 *    { displayPanel && (
 *      <Panel {...props}>
 *        ....
 *      </Panel>
 *    )}
 *  </AnimatePrescence>
 * )
 * }
 */
function Panel(props: PanelProps) {
  const { initialFocusRef, onDismiss, children, ariaLabel, ...rest } = props;

  return (
    <DialogOverlay
      {...rest}
      as={Overlay}
      isOpen={true}
      onDismiss={onDismiss}
      initialFocusRef={initialFocusRef}
      variants={backdropVariant}
      key="overlay"
      exit="hidden"
      initial="hidden"
      animate="visible"
    >
      <DialogContent
        as={Content}
        variants={modalVariant}
        key="content"
        initial="hidden"
        animate="visible"
        exit="exit"
        aria-label={ariaLabel}
      >
        {children}
      </DialogContent>
    </DialogOverlay>
  );
}

const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 8px 16px;
  padding-right: 8px;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  margin: 0;
`;

export interface PanelHeaderProps {
  title: string;
  onDismiss: DefaultProps['onDismiss'];
  icon?: React.ComponentType;
  className?: string;
}

const PanelHeader = React.forwardRef<HTMLDivElement, PanelHeaderProps>(
  function PanelHeader({ title, onDismiss, icon: IconComponent, className }, forwardRef) {
    return (
      <Header ref={forwardRef} className={className}>
        <Text variant="h6" as="h2" emphasis="high">
          {title}
        </Text>
        {IconComponent && (
          <IconButton onClick={onDismiss} shape="round">
            <IconComponent />
          </IconButton>
        )}
      </Header>
    );
  },
);

export interface PanelBaselineProps {
  children: React.ReactNode;
  className?: string;
}

const Body = styled.div`
  padding: 16px;
  flex: 1 1 auto;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.onSurface.high};
`;

const PanelBody = React.forwardRef<HTMLDivElement, PanelBaselineProps>(function PanelBody(
  { className, children, ...rest },
  forwardRef,
) {
  return (
    <Body {...rest} ref={forwardRef} className={className}>
      {children}
    </Body>
  );
});

const Actions = styled.div`
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 8px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PanelActions = React.forwardRef<HTMLDivElement, PanelBaselineProps>(
  function PanelActions({ className, children }, forwardRef) {
    return (
      <Actions ref={forwardRef} className={className}>
        {children}
      </Actions>
    );
  },
);

export { Panel, PanelHeader, PanelActions, PanelBody };
