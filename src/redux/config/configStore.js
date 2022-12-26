import { configureStore } from '@reduxjs/toolkit';
import balances from '../modules/balanceSlice';

const store = configureStore({
  reducer: { balances: balances },
});

export default store;
