import React from 'react';
import styled from 'styled-components';

const Caret = styled.span`
  margin-left: 4px;
  border-bottom: 0 solid transparent;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top-style: solid;
  border-top-width: 4px;
  content: '';
  display: inline-block;
  height: 0;
  vertical-align: middle;
  width: 0;
`;

Caret.displayName = 'Caret';

export default Caret;
