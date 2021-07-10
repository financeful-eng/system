import React from 'react';
import { ErrorMessage, Input } from './style';

export type ErrorProps =
  | { error?: false; errorMessage?: never }
  | { error: true; errorMessage: string };

export interface TextInputDefaultProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  id: string;
  autoFocus?: boolean;
  disabled?: boolean;
  dataId?: string;
  autoComplete?: string;
  placeholder?: string;
}

export type TextInputProps = TextInputDefaultProps & ErrorProps;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  props: TextInputProps,
  ref,
) {
  const {
    value,
    onChange,
    onBlur,
    type = 'text',
    error: validationError = false,
    errorMessage,
    id,
    autoFocus,
    dataId,
    disabled,
    autoComplete,
    placeholder,
  } = props;

  const [error] = React.useState(validationError);

  return (
    <>
      <Input
        value={value}
        type={type}
        onChange={onChange}
        ref={ref}
        onBlur={onBlur}
        id={id}
        data-testid={dataId}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        placeholder={placeholder}
        error={error}
      />

      {error && <ErrorMessage aria-describedby={id}>{errorMessage}</ErrorMessage>}
    </>
  );
});

export default TextInput;
