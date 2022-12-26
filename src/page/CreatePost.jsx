import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Content from "../components/Content";
import Swal from "sweetalert2";

const CreatePost = () => {
  const initialState = {
    titleA: "왼쪽게임",
    titleB: "오른쪽게임",
    contents: "",
  };

  const [balance, setBlance] = useState(initialState);
  console.log(balance);

  // 밸런스 게임 3가지 input box 유효성 검증
  const handleContentsSubmit = () => {
    const A = balance.titleA.length;
    const B = balance.titleB.length;
    const C = balance.contents.length;
    console.log(A, B, C);
    if (A < 1 || B < 1 || C < 1) {
      Swal.fire({
        text: "한 글자 이상 적어주세요.",
        title: "빈 칸이 있습니다. 채워주세요.",
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
      <WWrap>
        <Header>5G = Blance</Header>
        <Wrap
          style={{
            padding: "20px",
            backgroundColor: "#d7a6f5",
          }}
        >
          {/* 밸런스 게임 만드는 2가지 박스 */}
          <Input balance={balance} setBlance={setBlance} />
          {/* 만든 게임을 설명하는 박스 */}
          <Content
            balance={balance}
            setBlance={setBlance}
            handleContentsSubmit={handleContentsSubmit}
          />
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
