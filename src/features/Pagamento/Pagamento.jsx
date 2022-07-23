import PagamentoRadioGroup from './components/PagamentoRadioGroup';
import PagamentoFormFields from './components/PagamentoFormFields';

function Pagamento() {
  return (
    <>
      <h2>Método de pagamento</h2>
      <PagamentoRadioGroup />
      <PagamentoFormFields />
    </>
  )
}

export default Pagamento