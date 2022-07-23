import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import styled from 'styled-components';

import InputField from '../../../components/InputField';

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;

  div {
    flex-grow: 1;
  }

  div:first-child {
    margin-right: 1em;
  }
`;

const pagamentoValidationSchema = {
  metodo: Yup.string()
    .required('Campo obrigatório')
    .oneOf(['cartao', 'boleto', 'pix'], 'Método inválido'),
  titular: Yup.string()
    .when('metodo', {
      is: 'cartao',
      then: Yup.string().required('Campo obrigatório')
    }),
  cartao: Yup.string()
    .when('metodo', {
      is: 'cartao',
      then: Yup.string().required('Campo obrigatório')
    }),
  validade: Yup.string()
    .when('metodo', {
      is: 'cartao',
      then: Yup.string().required('Campo obrigatório')
    }),
  codigo: Yup.string()
    .when('metodo', {
      is: 'cartao',
      then: Yup.string().required('Campo obrigatório')
    }),
  cpf: Yup.string()
    .when('metodo', {
      is: (value) => value === 'boleto' || value === 'pix',
      then: Yup.string().required('Campo obrigatório')
    }),
};

function PagamentoFormFields() {
  const pagamentoState = useSelector((state) => state.pagamento);

  return (
    <>
      {pagamentoState.metodo === 'cartao' ? (
        <>
          <InputField
            name='titular'
            label='Nome do titular'
            type='text'
          />
          <InputField
            name='cartao'
            label='Número do cartão'
            type='text'
          />
          <TwoColumns>
            <InputField
              name='validade'
              label='Validade do cartão'
              type='text'
            />
            <InputField
              name='codigo'
              label='Código do cartão'
              type='text'
            />
          </TwoColumns>
        </>
      ) : pagamentoState.metodo === 'boleto' || pagamentoState.metodo === 'pix' ? (
        <InputField
          name='cpf'
          label='CPF'
          type='text'
        />
      ) : null
      }
    </>
  )
}

export default PagamentoFormFields;
export { pagamentoValidationSchema };