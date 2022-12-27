import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { EditBalance } from "./EditBalance";
import { Button } from "../UI/Button";
import { StatusBar } from "./statusbar/StatusBar";
import { Bar } from "./statusbar/Bar";
import { useQuery } from "react-query";
import { ComfirmModal } from "./ConfirmModal";
import AXIOS_ADDRESS from "../modules/AxiosAddress";

const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  & span {
    font-weight: 800;
    font-size: 1.2rem;
  }
`;

const Desc = styled.div`
  text-align: center;
  padding: 30px;
  & input {
    margin-top: 20px;
    width: 60vw;
    height: 5vh;
    padding: 5px;
    font-size: 0.9rem;
  }
  & label {
    font-size: 1rem;
    margin-right: 10px;
  }
  & div {
    input {
      margin-top: 20px;
      width: 30vw;
      height: 5vh;
    }
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

export const BalanceContent = () => {
  const { id } = useParams();
  const [isVote, setIsVote] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [voteData, setVoteData] = useState();
  const [confirm, setConfirm] = useState(false);
  const { isLoading, data } = useQuery(
    ["balance", id],
    async () => {
      const res = await axios.get(`${AXIOS_ADDRESS}/balances/${id}`);
      return res.data;
    },
    {
      refetchInterval: 500,
    }
  );
  useEffect(() => {
    if (localStorage.getItem(id) !== null) {
      setVoteData(localStorage.getItem(id));
      setIsVote(true);
    }
  }, []);

  const onVoteChoiceOne = (props) => {
    const edit = {
      ...data,
      choice1Rate: data.choice1Rate + 1,
      votes: data.votes + 1,
    };
    axios.patch(`${AXIOS_ADDRESS}/balances/${id}`, edit);
    localStorage.setItem(id, "choice1");
    setIsVote(!isVote);
  };

  const onVoteChoiceTwo = () => {
    const edit = {
      ...data,
      choice2Rate: data.choice2Rate + 1,
      votes: data.votes + 1,
    };
    axios.patch(`${AXIOS_ADDRESS}/balances/${id}`, edit);
    localStorage.setItem(id, "choice2");
    setIsVote(!isVote);
  };
  const onDeleteHandler = () => {
    setConfirm(!confirm);
  };

  const onToggleEditHandler = () => {
    setOnEdit(!onEdit);
  };

  return (
    <>
      {isLoading ? (
        <h1>로딩 중...</h1>
      ) : (
        <>
          {confirm ? (
            <ComfirmModal
              password={data.password}
              confirm={confirm}
              setConfirm={setConfirm}
              id={id}
            />
          ) : null}
          <ContentHeader>
            <div>
              <span>{data.nickname}</span>님의 게임입니다.
            </div>
            <div>
              <Button onClick={onToggleEditHandler}>
                {onEdit ? "닫기" : "수정"}
              </Button>
              <Button id={data.id} onClick={onDeleteHandler}>
                삭제
              </Button>
            </div>
          </ContentHeader>
          <Section>
            <Button
              disabled={isVote}
              onClick={onVoteChoiceOne}
              className={voteData === "choice1" ? "votedOne" : null}
            >
              {data.choice1}
            </Button>
            <span>VS</span>
            <Button
              disabled={isVote}
              onClick={onVoteChoiceTwo}
              className={voteData === "choice2" ? "votedTwo" : null}
            >
              {data.choice2}
            </Button>
          </Section>
          <Desc>
            {onEdit === true ? (
              <EditBalance
                id={data.id}
                data={data}
                setOnEdit={setOnEdit}
                value={data.contents}
              />
            ) : (
              <div>{data.contents}</div>
            )}
          </Desc>
          {isVote ? (
            <StatusBar>
              {data.choice1Rate > 0 ? (
                <Bar choice1={data.choice1Rate} choice2={data.choice2Rate}>
                  <span>{data.choice1Rate}</span>
                </Bar>
              ) : null}
              {data.choice2Rate > 0 ? <span>{data.choice2Rate}</span> : null}
            </StatusBar>
          ) : null}
        </>
      )}
    </>
  );
};
