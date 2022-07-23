import { ErrorMessage } from 'formik';
import styled from 'styled-components';

const StyledError = styled.div`
  width: 100%;
  font-style: italic;
  font-size: 0.8em;
  color: #D00;
`;

function CustomError({ name }) {
  return (
    <StyledError>
      <ErrorMessage name={name} />
    </StyledError>
  )
}

export default CustomError;