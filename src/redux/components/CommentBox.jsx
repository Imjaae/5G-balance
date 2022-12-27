import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
// import { each } from "immer/dist/internal";

function CommentBox({ item, setComments, comments }) {
  const [editContents, setEditContents] = useState("");
  const [isEdit, setIsedit] = useState(false);
  const [checkPw, setCheckPw] = useState("");

  const onClickEditButtonHandler = (contentsId, con) => {
    setIsedit(!isEdit);
    if (!editContents) {
      return alert("입력");
    }

    axios.patch(`http://localhost:3001/comments/${contentsId}`, {
      contents: editContents,
    });
    // setComments()

    const indexValue = comments.findIndex((comment) => {
      return comment.id === contentsId;
    });
    const updatedComment = [...comments];
    updatedComment[indexValue].contents = editContents;
    setComments(updatedComment);
    setEditContents("");
  };

  const onClickDeleteButtonHandler = (contentsId) => {
    axios.delete(`http://localhost:3001/comments/${contentsId}`);
    setComments(comments.filter((comment) => comment.id !== contentsId));
  };

  return (
    <CommentedBox>
      <ItemNickname>{item.nickName}</ItemNickname>
      {isEdit === false ? (
        <ItemContents>{item.contents}</ItemContents>
      ) : (
        <EditInput
          value={editContents}
          placeholder="수정값을 입력하세요"
          type="text"
          onChange={(ev) => {
            // console.log(ev.target.value);
            setEditContents(ev.target.value);
          }}
        />
      )}

      <InputPw value={checkPw} type="text" placeholder="비밀번호" style={{}} />
      <EditBox type="button" onClick={() => onClickEditButtonHandler(item.id)}>
        {isEdit ? "닫기" : "수정"}
      </EditBox>
      <EditBox
        type="button"
        onClick={() => onClickDeleteButtonHandler(item.id)}
      >
        삭제
      </EditBox>
    </CommentedBox>
  );
}

const CommentedBox = styled.h3`
  margin-right: 40px;
  display: flex;
  flex-direction: inherit;
  text-align: center;
  width: 100%;
`;

const EditBox = styled.button`
  margin-left: 5px;
  width: 5%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  align-self: center;
  cursor: pointer;
`;

// const Input = styled.input`
//   background-color: #5a7f6d;
//   color: white;
//   box-shadow: none;
//   border: 0.5px solid white;
//   width: 98%;
// `;

const ItemNickname = styled.div`
  margin-right: 20px;
  border: solid 1px white;
  padding: 10px;
  width: 100px;
`;

const ItemContents = styled.div`
  padding: 10px;
  border: solid 1px white;
  width: 600px;
  text-align: left;
`;

const EditInput = styled.input`
  background-color: #5a7f6d;
  border: 0.5px solid white;
  color: white;
  margin-left: 10px;
  padding-left: 20px;
  ::placeholder {
    color: white;
  }
`;

const InputPw = styled.input`
  width: 10%;
  display: flex;
  flex-direction: inherit;
  height: 100%;
  align-items: center;
  text-align: center;
  margin: 0px 10px;
  place-self: center;
`;

export default CommentBox;
