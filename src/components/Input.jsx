import React from "react";
import styled from "styled-components";

export default Input;

function Input({ balance, setBalance }) {
  // titleA는 왼쪽 밸런스 기입 박스, titleB는 오른쪽 박스입니다.
  const handleChoice1Change = (event) => {
    setBalance({ ...balance, choice1: event.target.value });
  };

  const handleChoice2Change = (event) => {
    setBalance({ ...balance, choice2: event.target.value });
  };

  return (
    <>
      <h3>밸런스를 작성해주세요.</h3>
      <p
        style={{
          fontSize: "10px",
          marginTop: "0px",
        }}
      >
        (밸런스 문제 수정은 불가합니다.)
      </p>
      <InputStyleObj>
        <input onChange={handleChoice1Change} />
        VS
        <input onChange={handleChoice2Change} />
      </InputStyleObj>
    </>
  );
}

const InputStyleObj = styled.div`
  margin: 20px 50px 20px 50px;
  padding: 20px;
  input {
    border: 0 solid black;
    background-color: #d6d4ce;
    height: 3vh;
    width: 25vw;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
