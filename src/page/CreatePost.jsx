import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Content from "../components/Content";
import Nickname from "../components/Nickname";
import Swal from "sweetalert2";
import axios from "axios";

//닉네임 input box 유효성 검증
export const nicknameCheck = (id) => {
  let regExp = /^[ㄱ-ㅎ가-힣ㅏ-ㅣa-zA-Z]+$/;
  // 영문 & 한글 입력 가능
  return regExp.test(id);
};

//비밀번호 input box 유효성 검증
export const passwordCheck = (id) => {
  let regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,20}$/;
  // 영문, 숫자 조합 4자리 이상
  return regExp.test(id);
};

// 최신순을 알기 위한 날짜
const date = new Date();
console.log(date);

const CreatePost = () => {
  const initialState = {
    choice1: "왼쪽게임",
    choice2: "오른쪽게임",
    contents: "",
    nickname: "닉네임",
    password: "비밀번호",
  };

  const [balance, setBalance] = useState(initialState);
  console.log(balance);

  // 밸런스 게임 만들기, 설명 input box 유효성 검증
  const handleContentsSubmit = async () => {
    const A = balance.choice1.length;
    const B = balance.choice2.length;
    const C = balance.contents.length;

    console.log(nicknameCheck(balance.nickname));
    if (!nicknameCheck(balance.nickname)) {
      window.alert("Nickname error");
      return;
    }
    if (!passwordCheck(balance.password)) {
      window.alert("Password error");
      return;
    }
    if (A < 1 || B < 1 || C < 1) {
      Swal.fire({
        title: "빈 칸이 있습니다. 채워주세요.",
        text: "한 글자 이상 적어주세요.",
        icon: "error",
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
      return;
    }
    const CreatePostData = {
      choice1: balance.choice1,
      choice2: balance.choice2,
      contents: balance.contents,
      nickname: balance.nickname,
      password: balance.password,
      date: date,
    };

    // json-server
    await axios.post(
      `https://json-server-vercel-mauve-nu.vercel.app/balances`,
      CreatePostData
    );
    console.log(balance);
  };

  const getBalances = async () => {
    const res = await axios.get(
      "https://json-server-vercel-mauve-nu.vercel.app/balances"
    );
    console.log(res);
    return res.data;
  };
  useEffect(() => {
    getBalances();
  }, []);
  return (
    <>
      <WWrap>
        <Wrap
          style={{
            padding: "20px",
          }}
        >
          {/* 닉네임, 비밀번호 만들기 */}
          <Nickname balance={balance} setBalance={setBalance} />
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
`;

// const balanceBasic = [
//   {
//     id: "id",
//     password: "비밀번호",
//     nickname,
//     choice1,
//     choice2,
//     date,
//   },
// ];
