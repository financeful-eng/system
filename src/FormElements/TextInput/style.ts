import styled, { css } from 'styled-components';

type WrapperProps = {
  hasIcon: boolean;
  error: boolean;
};
export const Wrapper = styled.div<WrapperProps>`
  --error-shadow: 0px 0px 0px 3px rgba(255, 64, 54, 0.4);
  --shadow: 0px 0px 0px 3px rgba(3, 102, 214, 0.4);
  --blue: ${({ theme }) => theme.colors.blue[400]};
  --red: ${({ theme }) => theme.colors.red[300]};
  --gray: ${({ theme }) => theme.colors.onSurface.disabled};
  display: inline-flex;
  align-items: stretch;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.elements.input};
  border: 1px solid transparent;
  padding: 6px 12px;

  &:focus,
  :focus-within {
    box-shadow: var(--shadow);
    border-color: var(--blue);
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

  .TextInput-icon {
    align-self: center;
    margin-right: 16px;
    height: 16px;
    width: 16px;
    color: var(--gray);
  }
`;

export const Input = styled.input<{ error: boolean }>`
  /* padding: 8px; */
  width: 100%;
  border: 0;
  margin: 0;
  display: block;
  min-width: 0;
  letter-spacing: inherit;
  color: ${({ theme }) => theme.text.primary};
  font: inherit;
  background-color: transparent;
  border-radius: 6px;

  ::placeholder {
    color: var(--gray);
  }

  :disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[400]};
  font-size: 0.75rem;
  text-align: left;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  padding-left: 4px;
`;
