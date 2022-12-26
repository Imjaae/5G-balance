import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Content from "../components/Content";
import Nickname from "../components/Nickname";
import Swal from "sweetalert2";

const CreatePost = () => {
  const initialState = {
    titleA: "왼쪽게임",
    titleB: "오른쪽게임",
    contents: "",
  };

  const [balance, setBalance] = useState(initialState);
  console.log(balance);
  //닉네임과 비밀번호 input box 유효성 검증(아직 안 함.)

  // 밸런스 게임 만들기, 설명 input box 유효성 검증
  const handleContentsSubmit = () => {
    const A = balance.titleA.length;
    const B = balance.titleB.length;
    const C = balance.contents.length;

    console.log(A, B, C);
    if (A < 1 || B < 1 || C < 1) {
      Swal.fire({
        title: "빈 칸이 있습니다. 채워주세요.",
        text: "한 글자 이상 적어주세요.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
    } else {
      console.log("여기서 부터 이제 파베 연결");
    }

    console.log(balance);
  };

  return (
    <>
      <Header>5G = Balance</Header>
      <WWrap>
        <Wrap
          style={{
            padding: "20px",
          }}
        >
          {/* 닉네임, 비밀번호 만들기 */}
          <Nickname />
          {/* 밸런스 게임 만드는 2가지 박스 */}
          <Input balance={balance} setBalance={setBalance} />
          {/* 만든 게임을 설명하는 박스 */}
          <Content
            balance={balance}
            setBalance={setBalance}
            handleContentsSubmit={handleContentsSubmit}
          />
        </Wrap>
      </WWrap>
    </>
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
