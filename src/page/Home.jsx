<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const goToDetailPage = (event) => {
    navigate(`/balance/${event.target.id}`);
  };

  return (
    <>
      <h1>메인페이지</h1>
<<<<<<< Updated upstream
      <button id="tZmyKkm" onClick={goToDetailPage}>
=======
      <button id="rDk83oD" onClick={goToDetailPage}>
>>>>>>> Stashed changes
        테스트 상세페이지1
      </button>
      <button id="rdO5boD" onClick={goToDetailPage}>
        테스트 상세페이지2
      </button>
=======
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
>>>>>>> main
    </>
  );
};
