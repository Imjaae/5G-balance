import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";

import { EditBalance } from "./EditBalance";
import { Button } from "../UI/Button";
import { StatusBar } from "./statusbar/StatusBar";
import { Bar } from "./statusbar/Bar";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  & span {
    font-weight: 800;
    font-size: 1.2rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px 0;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  & button {
    padding: 10px 20px;
  }
  & span {
    margin: 20px;
  }
`;

const Desc = styled.div`
  text-align: center;
  padding: 30px;
  & input {
    margin-top: 20px;
    width: 60vw;
    height: 5vh;
  }
`;

export const Content = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [balance, setBalance] = useState([]);
  const [onEdit, setOnEdit] = useState(false);

  const fetchBalance = async () => {
    const { data } = await axios.get(`http://localhost:3001/balance/${id}`);
    setBalance(data);
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const onDeleteHandler = (event) => {
    navigate("/");
    axios.delete(`http://localhost:3001/balance/${event.target.id}`);
    setBalance([]);
  };

  const onToggleEditHandler = () => {
    setOnEdit(!onEdit);
  };

  const onVoteChoiceOne = () => {
    const edit = {
      ...balance,
      choice1Rate: balance.choice1Rate + 1,
    };
    axios.patch(`http://localhost:3001/balance/${id}`, edit);
    setBalance(edit);
  };

  const onVoteChoiceTwo = () => {
    const edit = {
      ...balance,
      choice2Rate: balance.choice2Rate + 1,
    };
    axios.patch(`http://localhost:3001/balance/${id}`, edit);
    setBalance(edit);
  };

  return (
    <div>
      <Header>
        <div>
          <span>{balance.nickname}</span>님의 게임입니다.
        </div>
        <div>
          <Button onClick={onToggleEditHandler}>
            {onEdit ? "닫기" : "수정"}
          </Button>
          <Button id={balance.id} onClick={onDeleteHandler}>
            삭제
          </Button>
        </div>
      </Header>
      <Section>
        <Button onClick={onVoteChoiceOne}>{balance.choice1}</Button>
        <span>VS</span>
        <Button onClick={onVoteChoiceTwo}>{balance.choice2}</Button>
      </Section>
      <Desc>
        {onEdit === true ? (
          <EditBalance
            balance={balance}
            setOnEdit={setOnEdit}
            value={balance.choiceDesc}
            id={balance.id}
            setBalance={setBalance}
          />
        ) : (
          <div>{balance.choiceDesc}</div>
        )}
      </Desc>
      <StatusBar>
        <Bar choice1={balance.choice1Rate} choice2={balance.choice2Rate}>
          <span>{balance.choice1Rate}</span>
        </Bar>
        <span>{balance.choice2Rate}</span>
      </StatusBar>
    </div>
  );
};
