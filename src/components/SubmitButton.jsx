import styled from 'styled-components';

const CustomButton = styled.button`
  width: 100%;
`;

function SubmitButton({ children }) {
  return (
    <CustomButton type='submit'>{ children }</CustomButton>
  )
}

export default SubmitButton;