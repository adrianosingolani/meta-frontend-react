import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { submitUsuario } from './usuarioSlice';
import { submitPagamento } from '../Pagamento/pagamentoSlice';

import SubmitButton from '../../components/SubmitButton';
import UsuarioFormFields, { usuarioValidationSchema } from './components/UsuarioFormFields';
import { pagamentoValidationSchema } from '../Pagamento/components/PagamentoFormFields';
import Pagamento from '../Pagamento/Pagamento';

function Usuario() {
  const usuarioState = useSelector((state) => state.usuario);
  const pagamentoState = useSelector((state) => state.pagamento);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Dados do usuário</h2>
      <Formik
        enableReinitialize={true}
        initialValues={{ ...usuarioState, ...pagamentoState }}
        validationSchema={Yup.object({...usuarioValidationSchema, ...pagamentoValidationSchema})}
        onSubmit={(values) => {
          dispatch(submitUsuario(values));
          dispatch(submitPagamento(values));
        }}
      >
        <Form>
          <UsuarioFormFields />
          <Pagamento />
          <SubmitButton>Enviar</SubmitButton>
        </Form>
      </Formik>
    </>

  )
}

export default Usuario;