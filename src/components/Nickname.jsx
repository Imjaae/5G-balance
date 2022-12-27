import React from "react";
import styled from "styled-components";

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
            <input
              onChange={handleNicknameChange}
              id="nickname"
              type="text"
              placeholder="최소 4자 이상 입력 가능"
              autofocus
            />
            <input
              onChange={handlePasswordChange}
              id="password"
              type="text"
              placeholder="최소 4자 이상, 영문과 숫자로만 입력 가능"
              autofocus
            />
          </Divdiv>
        </NicknameStyleObj>
      </div>
    </>
  );
}

export default Nickname;

export const nicknameCheck = (id) => {
  let regExp = /^.*(?=^.{4,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  // 영문 & 4글자 이상 12글자 이하 & 숫자 포함
  return regExp.test(id);
};

export const passwordCheck = (id) => {
  let regExp = /^[A-Za-z0-9]{4,12}$/;
  // 영문 & 4글자 이상 12글자 이하 & 숫자 포함 & 특수 문자 미포함
  return regExp.test(id);
};

const NicknameStyleObj = styled.div`
  margin: 20px 50px 20px 50px;
  padding: 20px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    border: 0 solid black;
    background-color: #d6d4ce;
    height: 3vh;
    width: 25vw;
    margin-left: 20px;
    margin-right: 20px;
  }
  h4 {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;
const Divdiv = styled.div`
  display: flex;
`;
