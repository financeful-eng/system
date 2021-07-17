import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from './IconButton';
import { BsSearch } from 'react-icons/bs';

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <IconButton {...args}>
      <BsSearch />
    </IconButton>
  );
};

export const Round = Template.bind({});
Round.args = {
  shape: 'round',
};

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
};
