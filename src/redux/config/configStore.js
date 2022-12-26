import { configureStore } from '@reduxjs/toolkit';
import balances from '../modules/balanceSlice';
import bestBalances from '../modules/balanceSlice';

const store = configureStore({
  reducer: { balances: balances, bestBalances: bestBalances },
});

export default store;
