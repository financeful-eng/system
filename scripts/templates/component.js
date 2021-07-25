module.exports = (componentName) => ({
  content: `// Generated with scripts/create-component.js
  import React from 'react';
  import styled from 'styled-components';

  export interface ${componentName}Props{
    foo: string;
    'data-testid'?: string;
  };

  function ${componentName}({foo, ...rest}: ${componentName}Props){
    return (
      <div {...rest} data-testid={rest['data-testid']}>
        {foo}
      </div>
    )
  }

  export default ${componentName}
  `,
  extension: '.tsx',
});
