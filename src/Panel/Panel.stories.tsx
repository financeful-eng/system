import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Panel from './Panel';
import { Button } from '../Button';

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
      <Panel {...args} isOpen={isOpen} onDismiss={close}>
        <div style={{ color: 'white', minHeight: '250px', width: '100%' }}>
          This is a panel !!
        </div>
      </Panel>
    </>
  );
};

export const Default = Template.bind({});
