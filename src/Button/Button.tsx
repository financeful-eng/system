import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

const StyledButton = styled.button`
  background: ${(props) => props.theme.colors.red['100']};
  border: 1px solid ${(props) => props.theme.colors.blue['500']};
`;

function Button({ text, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

export default Button;
