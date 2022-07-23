import { Field } from 'formik';
import styled from 'styled-components';

import FieldContainer from './FieldContainer';
import CustomError from './CustomError';

const CustomLabel = styled.label`
  &.disabled {
    color: #777;
  }
`;

function InputField(props) {
  const { name, label, disabled } = props;

  return (
    <FieldContainer>
      <CustomLabel 
        htmlFor={name}
        className={disabled ? 'disabled' : null}
      >{label}</CustomLabel>
      <Field {...props} />
      <CustomError name={name} />
    </FieldContainer>
  )
}

export default InputField;