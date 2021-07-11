import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BsSearch } from 'react-icons/bs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: 'Hello Storybook!',
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  text: 'Secondary',
  variant: 'secondary',
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  text: 'Danger Button',
  variant: 'danger',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  text: 'With icon',
  icon: BsSearch,
  variant: 'secondary',
};

export const Outline = Template.bind({});
Outline.args = {
  text: 'Outline',
  variant: 'outline',
};
