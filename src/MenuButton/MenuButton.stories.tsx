import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuButton, MenuItem } from './MenuButton';
import { MdSearch, MdSettings, MdDashboard } from 'react-icons/md';

export default {
  title: 'MenuButton',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => {
  return (
    <MenuButton {...args}>
      <MenuItem onSelect={() => console.log('search')} icon={MdSearch}>
        Search
      </MenuItem>
      <MenuItem onSelect={() => console.log('Settings')} icon={MdSettings}>
        Settings
      </MenuItem>
      <MenuItem onSelect={() => console.log('dashboard')} icon={MdDashboard}>
        Dashboard
      </MenuItem>
    </MenuButton>
  );
};

export const Default = Template.bind({});

Default.args = {
  buttonProps: {
    variant: 'secondary',
  },
  defaultText: 'Actions',
};
