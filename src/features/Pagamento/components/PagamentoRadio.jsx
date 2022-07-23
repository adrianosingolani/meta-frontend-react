import { useDispatch } from 'react-redux';
import { Field, useFormikContext } from 'formik';

import { saveUsuario } from '../../Usuario/usuarioSlice';

import { setMetodo } from '../pagamentoSlice';

function PagamentoRadio({ value, label }) {
  const dispatch = useDispatch();

  const { values } = useFormikContext();

  return (
    <label>
      <Field
        type="radio"
        name="metodo"
        value={ value }
        onClick={(e) => {
          dispatch(saveUsuario(values));
          dispatch(setMetodo({...values, metodo: e.target.value}));
        }}
      />
      { label }
    </label>
  )
}

export default PagamentoRadio