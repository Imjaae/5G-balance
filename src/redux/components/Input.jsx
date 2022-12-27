import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import InputStyle from "../../UI/InputStyle";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { Button } from "../../UI/Button";
import AXIOS_ADDRESS from "../../modules/AxiosAddress";

function Input({ setComments, comments }) {
  const [contents, setContents] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const onSubmitHandler = (nickName, contents, password, postId) => {
    axios.post(`${AXIOS_ADDRESS}/comments`, {
      nickName: nickName,
      contents: contents,
      id: uuidv4(),
      postId: id,
      password: password,
    });

    const newComments = {
      nickName: nickName,
      contents: contents,
      id: uuidv4(),
      postId: id,
      password: password,
    };

    setComments((prev) => {
      return [...prev, newComments];
    });
    setNickname("");
    setContents("");
    setPassword("");
  };

  const handleNicknameButtonClick = (event) => {
    setNickname(event.target.value);
  };

  const handleTitleButtonClick = (event) => {
    setContents(event.target.value);
  };

  const passwordRegEx = /^[0-9]*$/;
  const handlePasswordButtonClick = (password) => {
    if (password.match(passwordRegEx) === null) {
      alert("숫자만 입력해 주세요 ❌");
      return password("");
    }
  };

  const addCommentButtonClick = (e) => {
    if (contents === "") {
      alert("댓글을 입력하세요🔥");
      return e.preventDefault();
    }
    if (password === "") {
      alert("비밀번호를 입력하세요🔥");
      return e.preventDefault();
    }
    if (nickname === "") {
      alert("닉네임을 입력하세요🔥");
      return e.preventDefault();
    } else {
    }
  };

  return (
    <InputBox
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitHandler(nickname, contents, password);
        if (e.target.value === "") {
          alert("입력해주세요");
        }
      }}
    >
      <InputStyle
        style={{
          width: "15%",
        }}
        onChange={handleNicknameButtonClick}
        value={nickname}
        placeholder="닉네임"
      />
      <InputStyle
        style={{
          width: "40%",
        }}
        onChange={handleTitleButtonClick}
        value={contents}
        placeholder="댓글을 작성해 주세요."
      />
      <InputStyle
        style={{
          width: "15%",
        }}
        onChange={(e) => {
          handlePasswordButtonClick(e.target.value);
          setPassword(e.target.value);
        }}
        value={password}
        placeholder="비밀번호 (숫자)"
        secureTextEntry={true}
      />
      <Button Margin="0 15px" onClick={addCommentButtonClick}>
        댓글 작성
      </Button>
    </InputBox>
  );
}

export default Input;

const InputBox = styled.form`
  padding: 30px;
  margin: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
`;
