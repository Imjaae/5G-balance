import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Balance from './Balance';

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

const BalanceList = () => {
  const { balances } = useSelector((state) => state.balances);

  return (
    <>
      {/* {bestBalances &&
        bestBalances.map((balance) => {
          return <div> {balance.votes}</div>;
        })} */}
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
