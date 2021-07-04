import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdDashboard } from 'react-icons/md';
import { SidebarItem } from './';

export default {
  title: 'Navigation/SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>;

const Template: ComponentStory<typeof SidebarItem> = (args) => {
  return <SidebarItem {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  text: 'Sidebar Item',
  as: 'div',
  icon: MdDashboard,
};
