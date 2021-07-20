import React from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion, usePresence, MotionProps } from 'framer-motion';
import { DialogContent, DialogOverlay } from '@reach/dialog';
import type { DialogProps, DialogContentProps, DialogOverlayProps } from '@reach/dialog';
import '@reach/dialog/styles.css';

// styled(DialogOverlay)<DialogOverlayProps>
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

//styled(DialogContent)<DialogContentProps>
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
  @media (max-width: 705px) {
    width: 100vw;
    max-width: 100vw;
    max-height: 100vh;
    height: 100vh;
    border-radius: 0;
    min-width: 0;
  }
`;

const CUSTOM_COMPONENT = styled(motion.div)<MotionProps>``;
interface PanelProps extends DialogProps {
  ariaLabel: string;
  children: React.ReactNode;
}

//TODO: Add slide-in animation for DialogContent

function Panel(props: PanelProps) {
  const { isOpen, initialFocusRef, onDismiss, children } = props;
  // TODO: Pass the ...rest props to content;

  return (
    <AnimatePresence>
      <DialogOverlay
        as={Overlay}
        isOpen={isOpen}
        onDismiss={onDismiss}
        initialFocusRef={initialFocusRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <DialogContent as={Content}>{children}</DialogContent>
      </DialogOverlay>
    </AnimatePresence>
  );
}

export default Panel;
