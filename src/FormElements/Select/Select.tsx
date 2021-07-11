import React from 'react';
import { WithChildren } from '../../.types/props';
import styled, { css } from 'styled-components';

const Container = styled.div<{ error: boolean }>`
  --error-shadow: 0px 0px 0px 3px rgba(255, 64, 54, 0.4);
  --shadow: 0px 0px 0px 3px rgba(3, 102, 214, 0.4);
  --blue: ${({ theme }) => theme.colors.blue[400]};
  --red: ${({ theme }) => theme.colors.red[300]};
  width: 100%;
  position: relative;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;

  & :focus-within,
  :focus {
    box-shadow: var(--shadow);
    border-color: var(--blue);
  }

  ${({ error }) =>
    error &&
    css`
      box-shadow: var(--error-shadow);
      border-color: var(--red);

      & :focus,
      :focus-within {
        border-color: var(--red);
        box-shadow: var(--error-shadow);
      }
    `}

  & > span.carot {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 16px 14px;
    height: 24px;
    width: 24px;
    position: absolute;
    right: 4px;
    top: 8px;
  }
`;

const StyledSelect = styled.select`
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
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[400]};
  font-size: 0.75rem;
  text-align: left;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  padding-left: 4px;
`;

export type ErrorProps =
  | { error?: false; errorMessage?: never }
  | { error: true; errorMessage: string };

type DefaultProps = WithChildren;

export type SelectProps = DefaultProps & ErrorProps;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { children, error: validationError = false, errorMessage }: SelectProps,
  ref,
) {
  const [error] = React.useState(validationError);

  return (
    <>
      <Container error={error}>
        <span className="carot" />
        <StyledSelect ref={ref}>
          <option value=""></option>
          {children}
        </StyledSelect>
      </Container>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
});

export default Select;
