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
  autoFocus?: boolean;
  disabled?: boolean;
  dataId?: string;
}

export type SelectProps = SelectDefaultProps & ErrorProps;

// TODO:
/* 
  1. Make comp React.forwardRef
  2. Add more props and pass to select (do the same for input too)
  3. Make sure heights are the same for form elements (select & input)
  4. Make Story for select error
  5. Add exports to index.ts
*/

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(function Select(
  props: SelectProps,
  ref,
) {
  const {
    value,
    onChange,
    onBlur,
    label,
    error: validationError = false,
    errorMessage,
    children,
    id,
    autoFocus,
    dataId,
    disabled,
  } = props;
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
        <StyledSelect
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          id={id}
          disabled={disabled}
          autoFocus={autoFocus}
          data-testid={dataId}
        >
          <option aria-label="None" value=""></option>
          {children}
        </StyledSelect>
        {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ElementBase>
    </Root>
  );
});

export default Select;
