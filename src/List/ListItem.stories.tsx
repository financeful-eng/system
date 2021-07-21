import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAction,
  ListItemContainer,
} from './List';
import { MdTrendingUp, MdMoreHoriz } from 'react-icons/md';
import { IconButton } from '../IconButton';

export default {
  title: 'ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => {
  return <ListItem {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Just plain <ListItem />... Nothing else',
};

export const WithIconAndText = Template.bind({});
WithIconAndText.args = {
  children: (
    <>
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
    </>
  ),
};

export const WithIconAndTextAndAction = Template.bind({});
WithIconAndTextAndAction.args = {
  children: (
    <>
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
    </>
  ),
};
