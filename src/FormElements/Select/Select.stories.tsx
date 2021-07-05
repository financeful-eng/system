import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select } from '.';

export default {
  title: 'FormElements/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = React.useState('');
  return (
    <div style={{ width: '270px' }}>
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
        <option value="option 3">Option 3</option>
        <option value="option 4">Option 4</option>
      </Select>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  label: 'Select Me',
  value: '',
  id: 'select',
};
