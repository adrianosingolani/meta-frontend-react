import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { setValor } from './valorSlice';

import ValorFormFields, { valorValidationSchema } from './components/ValorFormFields';
import SubmitButton from '../../components/SubmitButton';

function Valor() {
  const valorState = useSelector((state) => state.valor);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Valor</h2>
      <Formik
        initialValues={valorState}
        validationSchema={Yup.object(valorValidationSchema)}
        onSubmit={(values) => {
          dispatch(setValor(values));
        }}
      >
        <Form>
          <ValorFormFields />
          <SubmitButton>Continuar</SubmitButton>
        </Form>
      </Formik>
    </>
  );
}

export default Valor;