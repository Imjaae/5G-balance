import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BalanceBox = styled.div`
  width: 370px;
  height: 370px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  transition: 0.3s ease-in-out;
  border: 1px solid #000;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      transform: translateY(-10px);
    }
  }
`;

const BalanceTextBox = styled.p`
  margin: 15px 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #${(props) => props.textColor};
`;

const Balance = ({ balance }) => {
  const navigate = useNavigate();
  const goPost = () => {
    navigate(`balance/${balance.id}`);
  };
  return (
    <>
      <BalanceBox onClick={goPost}>
        <BalanceTextBox textColor="F47070">{balance.choice1}</BalanceTextBox>
        <BalanceTextBox>VS</BalanceTextBox>
        <BalanceTextBox textColor="7095F4">{balance.choice2}</BalanceTextBox>
      </BalanceBox>
    </>
  );
};

export default Balance;
