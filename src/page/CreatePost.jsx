import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Content from "../components/Content";

const CreatePost = () => {
  const initialState = {
    titleA: "왼쪽게임",
    titleB: "오른쪽게임",
    contents: "게임 설명",
  };

  const [balance, setBlance] = useState(initialState);
  console.log(balance);

  // 밸런스 게임 만드는 박스 유효성 검증
  const handleSubmit = () => {
    if (balance.titleA.length < 1) {
      window.alert(
        한 글자 이상 적어주세요.
      )
    }
  };

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
        <Content balance={balance} setBlance={setBlance} />
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
export default CreatePost;

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
