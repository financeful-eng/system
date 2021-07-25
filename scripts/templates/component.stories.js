module.exports = (comp) => ({
  content: `// Generated with scripts/create-component.js 
  
  import React from 'react';
  import { ComponentMeta, ComponentStory } from '@storybook/react';
  import ${comp} from './${comp}';

  export default {
    title: "${comp}",
    component: ${comp},
  } as ComponentMeta<typeof ${comp}>;

  const Template: ComponentStory<typeof ${comp}> = (args) => <${comp} {...args} />;

  export const Default = Template.bind({});
  `,
  extension: '.stories.tsx',
});
