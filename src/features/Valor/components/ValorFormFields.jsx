import * as Yup from 'yup';

import InputField from '../../../components/InputField';
import MoedaSelect from './MoedaSelect';

const valorValidationSchema = {
  moeda: Yup.string()
    .required('Campo obrigatório')
    .oneOf(['BRL', 'USD', 'EUR'], 'Moeda inválida'),
  quantia: Yup.number()
    .required('Campo obrigatório')
    .min(1, 'O valor mínimo é 1'),
};

function ValorFormFields() {
  return (
    <>
      <MoedaSelect />

      <InputField
        name='quantia'
        label='Quantia'
        type='number'
        onClick={(e) => e.target.value < 1 ? e.target.value = null : null}
      />
    </>
  )
}

export default ValorFormFields;
export { valorValidationSchema };