import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FormGroup from './FormGroup';
import { TextInput } from '../FormElements/TextInput';

export default {
  title: 'FormGroup',
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => {
  const [val, setVal] = React.useState('');
  return (
    <>
      <FormGroup>
        <FormGroup.Label>Label</FormGroup.Label>
        <TextInput
          value={val}
          onChange={(e) => setVal(e.currentTarget.value)}
          id="input"
          error={true}
          errorMessage="Error message!"
        />
      </FormGroup>
      <FormGroup>
        <FormGroup.Label>Label</FormGroup.Label>
        <TextInput
          value={val}
          onChange={(e) => setVal(e.currentTarget.value)}
          id="input"
        />
      </FormGroup>
      <FormGroup>
        <FormGroup.Label>Label</FormGroup.Label>
        <TextInput
          value={val}
          onChange={(e) => setVal(e.currentTarget.value)}
          id="input"
        />
      </FormGroup>
    </>
  );
};

export const Default = Template.bind({});
