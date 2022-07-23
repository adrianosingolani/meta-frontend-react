import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Valor from './features/Valor/Valor';
import Usuario from './features/Usuario/Usuario';
import DisplayState from './components/DisplayState';
import DisplayValor from './components/DisplayValor';

const Container = styled.div`
  display: flex;
  max-width: 480px;
  margin: 1em auto;
  padding: 1em;
  flex-direction: column;

  h1 {
    margin: 0;
    text-align: center;
  }
`;

function App() {
  const valorState = useSelector((state) => state.valor);
  const usuarioState = useSelector((state) => state.usuario);
  const pagamentoState = useSelector((state) => state.pagamento);

  return (
    <Container>
      <h1>Pagamento</h1>
      {
        valorState.submitted && usuarioState.submitted && pagamentoState.submitted ? (
          <DisplayState />
        ) : (
          valorState.submitted ? (
            <>
              <DisplayValor />
              <Usuario />
            </>
          ) : (
            <Valor />
          )
        )
      }
    </Container>
  );
}

export default App;
