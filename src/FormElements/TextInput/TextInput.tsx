import React from 'react';
import { Root, ElementBase as InputBase, ErrorMessage, Label, Input } from '../style';

export type ErrorProps =
  | { error?: false; errorMessage?: never }
  | { error: true; errorMessage: string };

export interface TextInputDefaultProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
  label: string;
  id: string;
}

export type TextInputProps = TextInputDefaultProps & ErrorProps;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  {
    value,
    onChange,
    onBlur,
    type = 'text',
    error: validationError = false,
    errorMessage,
    label,
    id,
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
      <Label
        shouldRaise={raiseLabel}
        isFocused={isFocused}
        withError={error}
        htmlFor={id}
      >
        {label}
      </Label>
      <InputBase withError={error}>
        <Input
          value={value}
          type={type}
          onChange={onChange}
          ref={ref}
          onBlur={onBlur}
          id={id}
        />
      </InputBase>
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Root>
  );
});

export default TextInput;
