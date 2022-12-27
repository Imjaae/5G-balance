import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import AXIOS_ADDRESS from "../../modules/AxiosAddress";

function CommentBox({ item, setComments, comments }) {
  const [editContents, setEditContents] = useState("");
  const [isEdit, setIsedit] = useState(false);
  const [checkPw, setCheckPw] = useState("");

  const onChangePw = (event) => {
    setCheckPw(event.target.value);
  };

  const onClickEditButtonHandler = (event) => {
    if (checkPw !== item.password) {
      alert("잘못된 비밀번호를 입력했거나 비밀번호를 입력하지 않았습니다!");
      setCheckPw("");

      return;
    } else {
      const edit = {
        ...item,
        contents: editContents,
      };
      setIsedit(false);
      const indexValue = comments.findIndex((comment) => {
        return comment.id === item.id;
      });
      axios.patch(`${AXIOS_ADDRESS}/comments/${item.id}`, edit);
      const updatedComment = [...comments];
      updatedComment[indexValue].contents = editContents;
      setComments(updatedComment);
      setEditContents("");
      setCheckPw("");
    }
  };

  const onClickDeleteButtonHandler = (event) => {
    event.preventDefault();
    if (checkPw !== item.password) {
      alert("비밀번호를 입력하지 않았거나 비밀번호가 다릅니다!");
      setCheckPw("");
      return;
    } else {
      axios.delete(`${AXIOS_ADDRESS}/comments/${item.id}`);
      setComments(comments.filter((comment) => comment.id !== item.id));
      setCheckPw("");
    }
  };

  const onClickFakeButton = () => [setIsedit(true)];
  return (
    <CommentedBox>
      <ItemNickname>{item.nickName}</ItemNickname>
      {isEdit === false ? (
        <ItemContents>{item.contents}</ItemContents>
      ) : (
        <>
          <EditInput
            value={editContents}
            placeholder="수정값을 입력하세요"
            type="text"
            onChange={(ev) => {
              setEditContents(ev.target.value);
            }}
          />
          <InputPw
            value={checkPw}
            type="text"
            placeholder="비밀번호 (숫자만 입력)"
            onChange={onChangePw}
            style={{}}
          />
        </>
      )}

      {isEdit ? (
        <EditBox
          type="button"
          onClick={() => onClickEditButtonHandler(item.id)}
        >
          완료
        </EditBox>
      ) : (
        <button onClick={onClickFakeButton}>수정</button>
      )}
      {isEdit ? (
        <EditBox type="button" onClick={onClickDeleteButtonHandler}>
          삭제
        </EditBox>
      ) : (
        <button onClick={onClickDeleteButton}>삭제</button>
      )}
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
