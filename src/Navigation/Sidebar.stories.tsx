import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdDashboard } from 'react-icons/md';
import { Sidebar, SidebarSection, SidebarBrand, SidebarFooter, SidebarItem } from './';

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar>
    <SidebarSection>
      <SidebarBrand>Financeful</SidebarBrand>
      <nav>
        <SidebarItem icon={MdDashboard} text="Dashboard" />
        <SidebarItem icon={MdDashboard} text="Transactions" />
        <SidebarItem icon={MdDashboard} text="My Wallet" />
        <SidebarItem icon={MdDashboard} text="Settings" />
        <SidebarItem icon={MdDashboard} text="Profile" />
      </nav>
    </SidebarSection>
    <SidebarFooter>Footer</SidebarFooter>
  </Sidebar>
);

export const Default = Template.bind({});
