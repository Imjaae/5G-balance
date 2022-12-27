import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  balances: [],
  bestBalances: [],
  isLoding: false,
  error: null,
};

export const __getBalances = createAsyncThunk(
  'balances/getBalances',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        'http://localhost:3001/balances/?_sort=date&_order=asc'
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBestBalance = createAsyncThunk(
  'bestBalances/getBestBalances',
  async (payload, thunkAPI) => {
    try {
      const bestData = await axios.get(
        'http://localhost:3001/balances?_sort=votes&_order=desc&_limit=3'
      );
      return thunkAPI.fulfillWithValue(bestData.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const balanceSlice = createSlice({
  name: 'balances',
  initialState,
  reducers: {},
  extraReducers: {
    [__getBalances.pending]: (state) => {
      state.isLoding = true;
    },
    [__getBalances.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.balances = action.payload;
    },
    [__getBalances.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
    [__getBestBalance.pending]: (state) => {
      state.isLoding = true;
    },
    [__getBestBalance.fulfilled]: (state, action) => {
      state.isLoding = false;
      state.bestBalances = action.payload;
    },
    [__getBestBalance.rejected]: (state, action) => {
      state.isLoding = false;
      state.error = action.payload;
    },
  },
});

export const {} = balanceSlice.actions;
export default balanceSlice.reducer;
