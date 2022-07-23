import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  submitted: false,
  metodo: '',
  titular: '',
  cartao: '',
  validade: '',
  codigo: '',
  cpf: '',
};

const pagamentoSlice = createSlice({
  name: 'pagamento',
  initialState,
  reducers: {
    submitPagamento: (state, action) => {
      pagamentoSlice.caseReducers.savePagamento(state, action);

      state.submitted = true;
    },
    savePagamento: (state, action) => {
      const { metodo, titular, cartao, validade, codigo, cpf } = action.payload;

      state.metodo = metodo;
      state.titular = titular;
      state.cartao = cartao;
      state.validade = validade;
      state.codigo = codigo;
      state.cpf = cpf;
    },
    setMetodo: (state, action) => {
      pagamentoSlice.caseReducers.savePagamento(state, action);

      state.metodo = action.payload.metodo;
    }
  },
});

export { pagamentoSlice };
export const { submitPagamento, setMetodo, savePagamento } = pagamentoSlice.actions;
export default pagamentoSlice.reducer;