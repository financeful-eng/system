import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Button/Primary',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  text: 'Hello Storybook!',
};
