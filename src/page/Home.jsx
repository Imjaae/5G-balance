import React, { useEffect } from 'react';
import BalanceList from '../components/BalanceList';
import { useDispatch, useSelector } from 'react-redux';
import { __getBalances, __getBestBalance } from '../redux/modules/balanceSlice';

export const Home = () => {
  const { isLoding, error } = useSelector((state) => state.balances);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getBestBalance());
    dispatch(__getBalances());
  }, [dispatch]);

  if (isLoding) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <>
      <BalanceList />
    </>
  );
};
