import React from 'react';
import styled, { css } from 'styled-components';

const Root = styled.div`
  width: 100%;
  display: inline-flex;
  min-width: 0;
  padding: 0;
  position: relative;
  flex-direction: column;
  vertical-align: top;
`;

type InputBaseProps = {
  withError: boolean;
};

const InputBase = styled.div<InputBaseProps>`
  border-radius: 4px 4px 0 0;
  background: ${({ theme }) => theme.colors.elements.input};
  cursor: text;
  position: relative;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1rem;
  box-sizing: border-box;
  display: inline-flex;
  line-height: 1.1876em;
  letter-spacing: 0.00938em;
  border-bottom: 2px solid transparent;
  transition: border-bottom 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  & :focus-within {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue[400]};
  }
  //TODO: add before and after list-style-position. It is working, you just have to select the pseudo elems in devtools
  & :after {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue[400]};
  }

  ${({ withError }) =>
    withError &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.red[400]};

      & :focus-within {
        border-bottom: none;
      }
    `}
`;

type LabelProps = {
  shouldRaise: boolean;
  isFocused: boolean;
  withError: boolean;
};

const Label = styled.label<LabelProps>`
  z-index: 1;
  transform: translate(12px, 20px) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  transform-origin: top left;
  color: ${({ theme }) => theme.colors.onSurface.medium};
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0.00938em;

  ${({ shouldRaise }) =>
    shouldRaise &&
    css`
      transform: translate(12px, 8px) scale(0.75);
    `}

  ${({ isFocused, withError }) => {
    if (isFocused && !withError) {
      return css`
        color: ${({ theme }) => theme.colors.blue[400]};
      `;
    }

    if ((isFocused && withError) || (!isFocused && withError)) {
      return css`
        color: ${({ theme }) => theme.colors.red[400]};
      `;
    }
  }}
`;

const Input = styled.input`
  padding: 20px 12px 8px;
  width: 100%;
  border: 0;
  /* height: 1.1876em; */
  margin: 0;
  display: block;
  min-width: 0;
  letter-spacing: inherit;
  color: currentColor;
  font: inherit;
  background: none;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red[400]};
  font-size: 0.75rem;
  text-align: left;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`;

export type ErrorProps =
  | { error?: false; errorMessage?: never }
  | { error: true; errorMessage: string };

export interface TextInputDefaultProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
}

export type TextInputProps = TextInputDefaultProps & ErrorProps;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  {
    value,
    onChange,
    type = 'text',
    error: validationError = false,
    errorMessage,
  }: TextInputProps,
  ref,
) {
  const [raiseLabel, setRaiseLabel] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);
  const [error] = React.useState(validationError);

  React.useEffect(() => {
    if (value.length > 0) {
      setRaiseLabel(true);
    }
  }, [value]);

  return (
    <Root
      onFocus={() => {
        setRaiseLabel(true);
        setIsFocused(true);
      }}
      onBlur={() => {
        if (value.length < 1) {
          setRaiseLabel(false);
        }
        setIsFocused(false);
      }}
    >
      <Label shouldRaise={raiseLabel} isFocused={isFocused} withError={error}>
        Label
      </Label>
      <InputBase withError={error}>
        <Input value={value} type={type} onChange={onChange} ref={ref} />
      </InputBase>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Root>
  );
});

export default TextInput;
