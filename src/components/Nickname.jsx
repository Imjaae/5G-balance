import React from "react";
import styled from "styled-components";
import InputStyle from "../UI/InputStyle";

function Nickname({ balance, setBalance }) {
  const handleNicknameChange = (event) => {
    setBalance({ ...balance, nickname: event.target.value });
  };
  const handlePasswordChange = (event) => {
    setBalance({ ...balance, password: event.target.value });
  };
  return (
    <>
      <h3>닉네임과 비밀번호를 설정해주세요.</h3>
      <div>
        <NicknameStyleObj>
          <h4>
            <label htmlFor="nickname">
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
              닉네임
            </label>
            <label htmlFor="password">
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
              비밀번호
            </label>
          </h4>
          <br />
          <Divdiv>
            <InputStyle
              onChange={handleNicknameChange}
              id="nickname"
              type="text"
              placeholder="영문과 한글 입력 가능"
            />
            <InputStyle
              onChange={handlePasswordChange}
              id="password"
              type="text"
              placeholder="영문과 숫자 조합으로 입력 가능(4자 이상)"
            />
          </Divdiv>
        </NicknameStyleObj>
      </div>
    </>
  );
}

export default Nickname;

const NicknameStyleObj = styled.div`
  margin: 20px 50px 20px 50px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;
// input {
//   border: 0 solid black;
//   background-color: #d6d4ce;
//   height: 3vh;
//   width: 23vw;
//   margin-left: 20px;
//   margin-right: 20px;
// }
const Divdiv = styled.div`
  display: flex;
`;
