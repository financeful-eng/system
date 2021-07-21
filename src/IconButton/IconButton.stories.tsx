import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import IconButton from './IconButton';
import { MdSearch } from 'react-icons/md';

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => {
  return (
    <IconButton {...args}>
      <MdSearch />
    </IconButton>
  );
};

export const Round = Template.bind({});
Round.args = {
  shape: 'round',
  hiddenText: 'Round',
};

export const Square = Template.bind({});
Square.args = {
  shape: 'square',
  hiddenText: 'Square',
};
