import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Balance from "./Balance";

const BalanceListBox = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;
const BestBalanceTitle = styled.h2`
  display: block;
  text-align: center;
  margin: 50px auto 0;
  font-size: 2rem;
`;
const BestBalanceTitleSpan = styled.span`
  color: #ffd601;
  border-bottom: 5px solid #${(props) => props.Color};
  margin-right: 5px;
`;

const BalanceList = () => {
  const { balances, bestBalances } = useSelector((state) => state.balances);

  return (
    <>
      <BestBalanceTitle>
        <BestBalanceTitleSpan Color="F47070">BEST</BestBalanceTitleSpan>
        <BestBalanceTitleSpan Color="7095F4">BALANCE</BestBalanceTitleSpan>
      </BestBalanceTitle>
      <BalanceListBox>
        {bestBalances.map((balance) => {
          return (
            <div key={balance.id}>
              <Balance balance={balance} />
            </div>
          );
        })}
      </BalanceListBox>
      <hr />
      <BalanceListBox>
        {balances.map((balance) => {
          return (
            <div key={balance.id}>
              <Balance balance={balance} />
            </div>
          );
        })}
      </BalanceListBox>
    </>
  );
};

export default BalanceList;
