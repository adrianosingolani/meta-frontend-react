import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  submitted: false,
  nome: '',
  email: '',
  cep: '',
  cidade: '',
  estado: '',
  endereco: '',
  numero: '',
  complemento: '',
};

const checkCep = createAsyncThunk('usuario/checkCep', async (values) => {
  const cepOnlyNumbers = values.cep.replace(/\D/g, "");

  if (cepOnlyNumbers !== '') {
    try {
      const res = await axios.get(`https://viacep.com.br/ws/${cepOnlyNumbers}/json/`);

      const { localidade, uf, logradouro } = res.data;

      const { nome, email, numero, complemento } = values;

      return {
        nome,
        email,
        numero,
        complemento,
        cep: cepOnlyNumbers,
        cidade: localidade,
        estado: uf,
        endereco: logradouro,
      }
    } catch (err) {
      console.log(err.message);
    }
  }
})

const usuarioSlice = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    submitUsuario: (state, action) => {
      usuarioSlice.caseReducers.saveUsuario(state, action);

      state.submitted = true;
    },
    saveUsuario: (state, action) => {
      const { nome, email, cep, cidade, estado, endereco, numero, complemento } = action.payload;

      state.nome = nome;
      state.email = email;
      state.cep = cep;
      state.cidade = cidade;
      state.estado = estado;
      state.endereco = endereco;
      state.numero = numero;
      state.complemento = complemento;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(checkCep.fulfilled, (state, action) => {

      return {
        ...state,
        ...action.payload
      }
    })
  },
});

export { usuarioSlice, checkCep };
export const { submitUsuario, saveUsuario } = usuarioSlice.actions;
export default usuarioSlice.reducer;