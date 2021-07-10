import styled, { css } from 'styled-components';

export const Input = styled.input<{ error: boolean }>`
  padding: 8px;
  border-radius: 6px;
  width: 100%;
  border: 0;
  margin: 0;
  display: block;
  min-width: 0;
  letter-spacing: inherit;
  color: ${({ theme }) => theme.text.primary};
  font: inherit;
  background: ${({ theme }) => theme.colors.elements.input};
  border: 1px solid transparent;

  &:focus,
  :focus-within {
    box-shadow: 0px 0px 0px 3px rgba(3, 102, 214, 0.4);
    border-color: ${({ theme }) => theme.colors.blue[400]};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.onSurface.disabled};
  }

  ${({ error }) =>
    error &&
    css`
      box-shadow: 0px 0px 0px 3px rgba(255, 64, 54, 0.4);
      border-color: ${({ theme }) => theme.colors.red[300]};
    `}
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[400]};
  font-size: 0.75rem;
  text-align: left;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  padding-left: 4px;
`;
