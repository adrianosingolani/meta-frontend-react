import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ValorContainer = styled.div`
  margin: 2em auto 1em;
  padding: 1em;
  font-size: 1.2em;
  background-color: #EEE;
`;

function DisplayValor() {
  const valorState = useSelector((state) => state.valor);

  const { moeda, quantia, quantiaBrl } = valorState;

  if (quantia >= 1) {
    if (moeda !== 'BRL') {
      return (
        <ValorContainer>
          {`${moeda} ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(quantia)} = BRL ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(quantiaBrl)}`}
        </ValorContainer>
      )
    } else {
      return (
        <ValorContainer>
          {`${moeda} ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(quantia)}`}
        </ValorContainer>
      )
    }
  } else {
    return null;
  }


}

export default DisplayValor