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
        <SidebarItem icon={MdDashboard} as="a" href="" />
        <SidebarItem icon={MdDashboard} className="active" />
        <SidebarItem icon={MdDashboard} />
        <SidebarItem icon={MdDashboard} />
        <SidebarItem icon={MdDashboard} />
      </nav>
    </SidebarSection>
    <SidebarFooter>Footer</SidebarFooter>
  </Sidebar>
);

export const MainSidebar = Template.bind({});
