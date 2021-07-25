module.exports = (comp) => ({
  content: `//Generated with scripts/create-component.js
  import React from 'react';
  import { render } from '@testing-library/react;
  
  import ${comp} from './${comp}.tsx'

  describe("Test Component", () => {
    test("It works", () => {
      const props = { foo: "bar", 'data-testid': 'financeful' };

      const { getByTestId } = render(<${comp} {...props} />);

      const component = getByTestId('financeful');

      expect(component).toHaveTextContent('bar');
    })
  })
  `,
  extension: '.test.tsx',
});
