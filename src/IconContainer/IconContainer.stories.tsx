import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconContainer from './IconContainer';
import { MdDashboard } from 'react-icons/md';
export default {
  title: 'IconContainer',
  component: IconContainer,
} as ComponentMeta<typeof IconContainer>;

const Template: ComponentStory<typeof IconContainer> = (args) => {
  return <IconContainer {...args} icon={MdDashboard} />;
};

export const Round = Template.bind({});
Round.args = {
  hiddenText: 'Round',
  variant: 'round',
  size: 'large',
};

export const Square = Template.bind({});

Square.args = {
  hiddenText: 'Square',
  variant: 'square',
  size: 'large',
};
