import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";

export const CreatePost = () => {
  const initialState = {
    titleA: "왼쪽게임",
    titleB: "오른쪽게임",
    contents: "게임 설명",
  };
  const [balance, setBlance] = useState(initialState);
  console.log(balance);
  return (
    <WWrap>
      <Header>5G = Blance</Header>
      <Wrap
        style={{
          padding: "20px",
          backgroundColor: "#d7a6f5",
        }}
      >
        {/* 밸런스 게임 만드는 박스 */}
        <Input balance={balance} setBlance={setBlance} />
        {/* 만든 게임을 설명하는 박스 */}
        <DetailDiv>
          <h3>밸런스 게임의 간단한 설명을 작성해주세요.</h3>
          <input />
          <br />
          <button
            style={{
              margin: "20px, 60px, 20px, 60px",
            }}
          >
            게임 만들기
          </button>
        </DetailDiv>
      </Wrap>
      <footer
        style={{
          padding: "20px",
          backgroundColor: "#e8c7fc",
        }}
      >
        푸터입니다
      </footer>
    </WWrap>
  );
};
const Header = styled.header`
  padding: "20px";
  background-color: "#e8c7fc";
`;

const WWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrap = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: "20px";
  background-color: "#d7a6f5";
`;

const DetailDiv = styled.div`
  padding: 20px;
  border: 1px solid black;
  transition: 0.4s;
  input {
    display: block;
    margin: auto;
  }
  button {
    display: block;
    margin: auto;
  }
  :hover {
    h3 {
      color: aliceblue;
    }
  }
`;
