import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

function Input({ setComments, comments }) {
  const [contents, setContents] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();

  const onSubmitHandler = (nickName, contents, password, postId) => {
    axios.post(`http://localhost:3001/comments`, {
      nickName: nickName,
      contents: contents,
      id: uuidv4(),
      postId: id,
      password: password,
    });
    console.log(id);
    // console.log("event :", event.target[0].value);

    const newComments = {
      nickName: nickName,
      contents: contents,
      id: uuidv4(),
      postId: id,
      password: password,

      // isDone: false(),
    };
    // console.log(newComments);

    setComments((prev) => {
      return [...prev, newComments];
    });
    setNickname("");
    setContents("");
    setPassword("");
    // console.log(event.target.value);
  };

  const handleNicknameButtonClick = (event) => {
    setNickname(event.target.value);
  };

  const handleTitleButtonClick = (event) => {
    setContents(event.target.value);
  };

  const passwordRegEx = /^[0-9]*$/;
  // const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  const handlePasswordButtonClick = (password) => {
    if (password.match(passwordRegEx) === null) {
      alert("숫자만 입력해 주세요 ❌");
      return password("");
    }
  };

  const addCommentButtonClick = (e) => {
    // console.log({ contents }, { nickname }, { password });
    // console.log(contents);
    // console.log(password);
    // console.log(nickname);
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
      alert("댓글을 등록하였습니다 🧤");
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
      <input
        style={{
          width: "20%",
          marginRight: "10px",
        }}
        onChange={handleNicknameButtonClick}
        value={nickname}
        placeholder="닉네임"
      />
      <input
        style={{
          width: "30%",
          marginRight: "10px",
        }}
        onChange={handleTitleButtonClick}
        value={contents}
        placeholder="댓글을 작성해 주세요."
      />
      <input
        style={{
          width: "10%",
          marginRight: "10px",
        }}
        onChange={(e) => {
          handlePasswordButtonClick(e.target.value);
          setPassword(e.target.value);
        }}
        value={password}
        placeholder="비밀번호"
        secureTextEntry={true}
      />
      <button onClick={addCommentButtonClick}>댓글 작성</button>
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
  align-items: center;
`;
