import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List, ListItem } from './List';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
  return <List {...args} />;
};

export const Basic = Template.bind({});

const BasicChildren = (
  <>
    <ListItem>List Item</ListItem>
    <ListItem selected>List Item</ListItem>
    <ListItem>List Item</ListItem>
    <ListItem>List Item</ListItem>
    <ListItem>List Item</ListItem>
  </>
);
Basic.args = {
  children: BasicChildren,
};
