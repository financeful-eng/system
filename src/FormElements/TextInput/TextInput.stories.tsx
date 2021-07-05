import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput } from '.';

export default {
  title: 'FormElements/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [value, setValue] = React.useState('Type something!');
  return (
    <div style={{ width: '270px' }}>
      <TextInput {...args} />
    </div>
  );
};

export const Default = Template.bind({});
export const Error = Template.bind({});

Error.args = {
  error: true,
  errorMessage: 'This is an error message',
  value: 'With error',
  label: 'Label',
  id: 'Error-input',
};

Default.args = {
  value: '',
  label: 'Some label',
  id: 'default-input',
};
