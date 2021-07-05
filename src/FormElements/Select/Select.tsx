import React from 'react';
import { Root, Label, ElementBase, Select as StyledSelect, ErrorMessage } from '../style';

export type ErrorProps =
  | { error?: false; errorMessage?: never }
  | { error: true; errorMessage: string };

export interface SelectDefaultProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  children: React.ReactNode;
  id: string;
}

export type SelectProps = SelectDefaultProps & ErrorProps;

function Select({
  value,
  onChange,
  onBlur,
  label,
  error: validationError = false,
  errorMessage,
  children,
  id,
}: SelectProps) {
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
      <ElementBase withError={error}>
        <StyledSelect value={value} onChange={onChange} onBlur={onBlur} id={id}>
          <option aria-label="None" value=""></option>
          {children}
        </StyledSelect>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ElementBase>
    </Root>
  );
}

export default Select;
