import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsSearch } from 'react-icons/bs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>This is a button</Button>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  variant: 'secondary',
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  variant: 'danger',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: BsSearch,
  variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};
