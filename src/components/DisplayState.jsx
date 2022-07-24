import { useSelector } from 'react-redux';

function DisplayState() {
  const getFormattedValor = () => {
    const valor = useSelector((state) => state.valor);
    const { submitted, ...otherValorProperties } = valor;

    return otherValorProperties;
  }

  const getFormattedUsuario = () => {
    const usuario = useSelector((state) => state.usuario);
    const { submitted, ...otherUsuarioProperties } = usuario;

    return otherUsuarioProperties;
  }

  const getFormattedPagamento = () => {
    const pagamentoState = useSelector((state) => state.pagamento);

    const { submitted, metodo, cpf, ...otherPagamentoProperties } = pagamentoState;

    if (metodo === 'cartao') {
      return {
        metodo,
        ...otherPagamentoProperties
      };
    } else if (metodo === 'boleto' || metodo === 'pix') {
      return {
        metodo,
        cpf
      }
    }
  }

  return (
    <pre>
      {
        JSON.stringify(
          {
            ...getFormattedValor(),
            ...getFormattedUsuario(),
            ...getFormattedPagamento()
          }, null, 4
        )
      }
    </pre>
  )
}

export default DisplayState;