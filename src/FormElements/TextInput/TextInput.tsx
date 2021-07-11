import React from 'react';
import { ErrorMessage, Input, Wrapper } from './style';

export type ErrorProps =
  | { error?: false; errorMessage?: never }
  | { error: true; errorMessage: string };

type NativeInputProps = React.AllHTMLAttributes<HTMLInputElement>;

export interface TextInputDefaultProps {
  value: NonNullable<string>;
  onChange: NonNullable<NativeInputProps['onChange']>;
  onBlur?: NativeInputProps['onBlur'];
  type?: string;
  id: NonNullable<string>;
  autoFocus?: NativeInputProps['autoFocus'];
  autoComplete?: NativeInputProps['autoComplete'];
  'aria-describedby'?: NativeInputProps['aria-describedby'];
  disabled?: boolean;
  dataId?: string;
  placeholder?: string;
  icon?: React.ComponentType<{ className?: string }>;
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
    icon: IconComponent,
    ...rest
  } = props;

  const [error] = React.useState(validationError);

  return (
    <>
      <Wrapper error={error} hasIcon={!!IconComponent}>
        {IconComponent && <IconComponent className="TextInput-icon" />}
        <Input
          {...rest}
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
      </Wrapper>
      {error && <ErrorMessage aria-describedby={id}>{errorMessage}</ErrorMessage>}
    </>
  );
});

export default TextInput;
