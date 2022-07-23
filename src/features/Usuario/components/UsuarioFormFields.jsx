import { useDispatch } from 'react-redux';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import InputField from '../../../components/InputField';

import { checkCep } from '../usuarioSlice';

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

const CepButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  button {
    height: 100%;
    margin-top: 16px;
  }
`;

const usuarioValidationSchema = {
  nome: Yup.string()
    .required('Campo obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 letras'),
  email: Yup.string()
    .required('Campo obrigatório')
    .email('E-mail inválido'),
  cep: Yup.string()
    .required('Campo obrigatório'),
  cidade: Yup.string()
    .required('Campo obrigatório'),
  estado: Yup.string()
    .required('Campo obrigatório'),
  endereco: Yup.string()
    .required('Campo obrigatório'),
  numero: Yup.string()
    .required('Campo obrigatório'),
  complemento: Yup.string(),
}

function UsuarioForm() {
  const dispatch = useDispatch();

  const { values } = useFormikContext();

  return (
    <>
      <InputField
        name='nome'
        label='Nome'
        type='text'
      />

      <InputField
        name='email'
        label='E-mail'
        type='email'
      />

      <TwoColumns>
        <InputField
          name='cep'
          label='CEP'
          type='text'
        />
        <CepButton>
          <button onClick={(e) => {
            e.preventDefault();
            dispatch(checkCep(values));
          }}
          >
            Checar CEP
          </button>
        </CepButton>
      </TwoColumns>

      <InputField
        name='cidade'
        label='Cidade'
        type='text'
      />

      <InputField
        name='estado'
        label='Estado'
        type='text'
      />

      <InputField
        name='endereco'
        label='Endereço'
        type='text'
      />

      <TwoColumns>
        <InputField
          name='numero'
          label='Número'
          type='text'
        />

        <InputField
          name='complemento'
          label='Complemento'
          type='text'
        />
      </TwoColumns>
    </>
  )
}

export default UsuarioForm;
export { usuarioValidationSchema };