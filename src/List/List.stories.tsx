import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAction,
  ListItemContainer,
} from './List';
import { MdTrendingUp, MdMoreHoriz } from 'react-icons/md';
import { IconButton } from '../IconButton';

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
  const arr = new Array(10).fill(null).map((x, i) => i);
  return (
    <div style={{ width: 400 }}>
      <List {...args}>{arr.map((i) => args.children)}</List>
    </div>
  );
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

export const IconTextAndAction = Template.bind({});

const SubComponents = (
  <ListItem>
    <ListItemContainer>
      <ListItemIcon
        iconProps={{
          icon: MdTrendingUp,
          size: 'large',
          variant: 'round',
          hiddenText: 'Icon description',
          surfaceLevel: 24,
        }}
      />
      <ListItemText primary="This is primary text" secondary="This is secondary text" />
    </ListItemContainer>
    <ListItemAction>
      <IconButton
        shape="round"
        hiddenText="icon description"
        onClick={() => console.log('hi')}
      >
        <MdMoreHoriz />
      </IconButton>
    </ListItemAction>
  </ListItem>
);

IconTextAndAction.args = {
  children: SubComponents,
};

export const TextAndAction = Template.bind({});

const TextAndActionChildren = (
  <ListItem>
    <ListItemContainer>
      <ListItemText primary="This is primary text" secondary="This is secondary text" />
    </ListItemContainer>
    <ListItemAction>
      <IconButton
        shape="round"
        hiddenText="icon description"
        onClick={() => console.log('hi')}
      >
        <MdMoreHoriz />
      </IconButton>
    </ListItemAction>
  </ListItem>
);

TextAndAction.args = {
  children: TextAndActionChildren,
};

export const TextOnly = Template.bind({});

const TextOnlyChild = (
  <ListItem>
    <ListItemText primary="This is primary text" />
  </ListItem>
);

TextOnly.args = {
  children: TextOnlyChild,
};
