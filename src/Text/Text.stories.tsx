import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '.';

export default {
  title: 'Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = ({ children, ...rest }) => (
  <Text {...rest}>This is some text</Text>
);

export const TextTemplate = Template.bind({});
