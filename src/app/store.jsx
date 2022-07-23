import { configureStore } from '@reduxjs/toolkit';
import valorReducer from '../features/Valor/valorSlice';
import UsuarioReducer from '../features/Usuario/usuarioSlice';
import PagamentoReducer from '../features/Pagamento/pagamentoSlice';

export const store = configureStore({
  reducer: {
    valor: valorReducer,
    usuario: UsuarioReducer,
    pagamento: PagamentoReducer,
  },
});