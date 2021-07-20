import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Panel, PanelHeader, PanelActions, PanelContent } from './Panel';
import { Button } from '../Button';
import { AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

export default {
  title: 'Panel',
  component: Panel,
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Open panel
      </Button>
      <AnimatePresence>
        {isOpen && (
          <Panel {...args} onDismiss={close} ariaLabel="panel">
            {args.children}
          </Panel>
        )}
      </AnimatePresence>
    </>
  );
};

export const Default = Template.bind({});

const DefaultChildren = (
  <div
    style={{
      color: 'white',
      minHeight: '250px',
      width: '100%',
    }}
  >
    This is a panel by its self!!
  </div>
);
Default.args = {
  ariaLabel: 'aria-label-modal',
  children: DefaultChildren,
};

export const WithSubComponents = Template.bind({});

const SubChildren = (
  <>
    <PanelHeader
      title="Panel Header"
      onDismiss={() => console.log('dismiss modal')}
      icon={MdClose}
    />

    <PanelContent>hi</PanelContent>
    <PanelActions>
      <Button variant="primary" onClick={() => alert('Save')}>
        Save
      </Button>
    </PanelActions>
  </>
);

WithSubComponents.args = {
  children: SubChildren,
};
