import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IoWarningOutline } from 'react-icons/io5';

import Flash from './Flash';

export default {
  title: 'Flash',
  component: Flash,
} as ComponentMeta<typeof Flash>;

const Template: ComponentStory<typeof Flash> = (args) => {
  return (
    <div style={{ width: 500 }}>
      <Flash {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'This is a flash alert',
  icon: IoWarningOutline,
};
