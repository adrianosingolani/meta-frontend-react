import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  submitted: false,
  moeda: 'BRL',
  quantia: 0,
  quantiaBrl: 0,
}

const setValor = createAsyncThunk('valor/setValor', async (values) => {
  try {
    
    const { moeda, quantia } = values;

    let quantiaBrl = quantia;

    if (moeda !== 'BRL') {
      const res = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${moeda.toLowerCase()}/brl.json`);
      quantiaBrl = res.data.brl * quantia;
    }
    
    return {
      submitted: true,
      moeda: moeda,
      quantia: quantia,
      quantiaBrl: quantiaBrl,
    }
  } catch (err) {
    console.log(err.message);
  }
})

const valorSlice = createSlice({
  name: 'valor',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(setValor.fulfilled, (state, action) => {

      return {
        ...state,
        ...action.payload
      }
    })
  },
})

export { valorSlice, setValor };
export default valorSlice.reducer;