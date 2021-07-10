import styled, { css } from 'styled-components';

export const Input = styled.input<{ error: boolean }>`
  --error-shadow: 0px 0px 0px 3px rgba(255, 64, 54, 0.4);
  --shadow: 0px 0px 0px 3px rgba(3, 102, 214, 0.4);
  --blue: ${({ theme }) => theme.colors.blue[400]};
  --red: ${({ theme }) => theme.colors.red[300]};
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
    box-shadow: var(--shadow);
    border-color: var(--blue);
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.onSurface.disabled};
  }

  ${({ error }) =>
    error &&
    css`
      box-shadow: var(--error-shadow);
      border-color: var(--red);
      &:focus,
      :focus-within {
        box-shadow: var(--error-shadow);
        border-color: var(--red);
      }
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
