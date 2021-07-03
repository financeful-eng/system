import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdDashboard } from 'react-icons/md';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar>
    <SidebarItem icon={MdDashboard} />
    <SidebarItem icon={MdDashboard} />
    <SidebarItem icon={MdDashboard} />
    <SidebarItem icon={MdDashboard} />
    <SidebarItem icon={MdDashboard} />
  </Sidebar>
);

export const MainSidebar = Template.bind({});
