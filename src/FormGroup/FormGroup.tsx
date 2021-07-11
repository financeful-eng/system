import styled from 'styled-components';

const FormGroup = styled.div`
  margin: 16px 0;
`;

const FormGroupLabel = styled.label`
  margin: 0 0 8px;
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
  font-family: inherit;
`;

FormGroupLabel.displayName = 'FormGroup.Label';

export default Object.assign(FormGroup, { Label: FormGroupLabel });
