import { Field } from 'formik';

import FieldContainer from '../../../components/FieldContainer';
import CustomError from '../../../components/CustomError';

function MoedaSelect({ formik }) {
  return (
    <FieldContainer>
      <label htmlFor='moeda'>Moeda:</label>
      <Field as='select' name='moeda'>
        <option value='BRL'>BRL</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
      </Field>
      <CustomError name='moeda' />
    </FieldContainer>
  )
}

export default MoedaSelect;