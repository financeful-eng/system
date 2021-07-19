import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <div style={{ width: 200, height: 200 }}>This is a card</div>
  </Card>
);

export const Default = Template.bind({});
