import styled from 'styled-components';

import PagamentoRadio from './PagamentoRadio';
import CustomError from '../../../components/CustomError';

const RadioGroup = styled.div`
  margin-bottom: 1em;

  label {
    margin-right: 16px;
  }

  label input {
    margin: 0 4px 0 0;
  }
`

function PagamentoRadioGroup() {
  return (
    <RadioGroup role="group" aria-labelledby="my-radio-group">
      <PagamentoRadio value="cartao" label="Cartão de crédito" />
      <PagamentoRadio value="boleto" label="Boleto" />
      <PagamentoRadio value="pix" label="PIX" />
      <CustomError name='metodo' />
    </RadioGroup>
  )
}

export default PagamentoRadioGroup;