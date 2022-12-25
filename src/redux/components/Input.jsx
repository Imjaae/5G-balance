import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

function Input({ setComments }) {
  const [contents, setContents] = useState("");
  const [nickname, setNickname] = useState("");

  const handleChangeBotton = (event) => {
    event.preventDefault();

    // console.log("event :", event.target[0].value);

    const newComments = {
      nickName: nickname,
      contents: contents,
      id: uuidv4(),
      // isDone: false(),
    };

    setComments((prev) => {
      return [...prev, newComments];
    });
    setContents("");
    // console.log(event.target.value);
  };

  const handleChangeInput = (event) => {
    setContents(event.target.value);
  };

  return (
    <InputBox onSubmit={handleChangeBotton}>
      <input
        onChange={handleChangeInput}
        value={contents}
        placeholder="댓글을 작성해 주세요."
      />
      <button>댓글 작성</button>
    </InputBox>
  );
}

export default Input;

const InputBox = styled.form`
  border: 1px solid #5a7f6d;
  padding: 30px;
  margin: 30px;
  display: flex;
  width: 100%;
`;
