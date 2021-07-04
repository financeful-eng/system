import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MdDashboard } from 'react-icons/md';
import {
  Sidebar,
  SidebarContent,
  SidebarBrand,
  SidebarFooter,
  SidebarItem,
  SectionLabel,
  SidebarSection,
} from './';
import { Avatar } from '../Avatar';
import { Text } from '../Text';

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar>
    <SidebarContent>
      <SidebarBrand>
        <div
          style={{
            height: '100%',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Text variant="h5" emphasis="high" as="h1">
            Financeful
          </Text>
        </div>
      </SidebarBrand>
      <nav>
        <SidebarSection>
          <SectionLabel>Section 1</SectionLabel>
          <SidebarItem icon={MdDashboard} text="Dashboard" />
          <SidebarItem icon={MdDashboard} text="Transactions" />
          <SidebarItem icon={MdDashboard} text="My Wallet" />
          <SidebarItem icon={MdDashboard} text="Settings" />
          <SidebarItem icon={MdDashboard} text="Profile" />
        </SidebarSection>
      </nav>
    </SidebarContent>
    <SidebarFooter>
      <div
        style={{
          padding: '0 24px 0 18px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar name="Financeful" />
        <div>
          <Text variant="button" emphasis="high" as="p">
            First and Last name
          </Text>
          <Text variant="button" emphasis="medium" as="p">
            Femail@email.com
          </Text>
        </div>
      </div>
    </SidebarFooter>
  </Sidebar>
);

export const Default = Template.bind({});
