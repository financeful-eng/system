import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Badge from './Badge';

export default {
  title: 'Badges',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  return <Badge {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 'Default',
};
export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  value: 'Success',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  value: 'Error',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  value: 'Info',
};
