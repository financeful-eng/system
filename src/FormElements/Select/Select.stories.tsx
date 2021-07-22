import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from './Select';

export default {
  title: 'FormElements/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = React.useState('1');
  return (
    <div style={{ width: 400 }}>
      <Select {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        <option value="1">Option</option>
        <option value="2">Option</option>
        <option value="3">Option</option>
        <option value="4">Option</option>
        <option value="5">Option</option>
      </Select>
    </div>
  );
};

export const Default = Template.bind({});
export const Error = Template.bind({});

Error.args = {
  error: true,
  errorMessage: 'Error Message!!',
};
