import React from "react";
import styled from "styled-components";
import InputStyle from "../../UI/InputStyle";
import { useState } from "react";
import axios from "axios";
import { Button } from "../../UI/Button";
import AXIOS_ADDRESS from "../../modules/AxiosAddress";
import Swal from "sweetalert2";

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

  // const onClickDeleteButtonHandler = (event) => {
  //   event.preventDefault();
  //   if (checkPw !== item.password) {
  //     alert("비밀번호를 입력하지 않았거나 비밀번호가 다릅니다!");
  //     setCheckPw("");
  //     return;
  //   } else {
  //     axios.delete(`${AXIOS_ADDRESS}/comments/${item.id}`);
  //     setComments(comments.filter((comment) => comment.id !== item.id));
  //     setCheckPw("");
  //   }
  // };

  const onClickFakeButton = () => [setIsedit(true)];
  const onClickDeleteButton = () => {
    (async () => {
      const { value: getName } = await Swal.fire({
        title: "댓글 삭제",
        text: "비밀번호를 입력하여 삭제 할 수 있습니다.",
        input: "text",
        inputPlaceholder: "비밀번호 입력(숫자)",
        showConfirmButton: true,
        confirmButtonColor: "black",
      });

      // 이후 처리되는 내용.
      if (getName === item.password) {
        await axios.delete(`${AXIOS_ADDRESS}/comments/${item.id}`);
        window.location.reload();
      } else {
        Swal.fire({
          title: "Error",
          text: "비밀번호가 틀렸습니다.",
          icon: "error",
          showConfirmButton: true,
          confirmButtonColor: "black",
        });
      }
    })();
  };
  const onClickCancleButton = () => [setIsedit(false)];
  // console.log(item.nickName);

  return (
    <CommentedBox>
      <ItemNickname>{item.nickName}</ItemNickname>
      {isEdit === false ? (
        <ItemContents>{item.contents}</ItemContents>
      ) : (
        <>
          <InputStyle
            value={editContents}
            placeholder={editContents}
            type="text"
            style={{ width: "250px", padding: "25px 5px 1px 5px" }}
            onChange={(ev) => {
              setEditContents(ev.target.value);
            }}
          />
          <InputStyle
            value={checkPw}
            type="text"
            placeholder="비밀번호 "
            onChange={onChangePw}
            style={{ width: "100px", padding: "25px 5px 1px 5px" }}
          />
        </>
      )}
      {isEdit ? (
        <EditBox
          type="button"
          onClick={() => onClickEditButtonHandler(item.id)}
        >
          확인
        </EditBox>
      ) : (
        <EditButton onClick={onClickFakeButton}>수정</EditButton>
      )}
      {isEdit ? (
        <EditBox type="button" onClick={onClickCancleButton}>
          취소
        </EditBox>
      ) : (
        <EditBox type="button" onClick={onClickDeleteButton}>
          삭제
        </EditBox>
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
  font-size: 15px;
`;

const EditBox = styled.button`
  height: 37px;
  margin: 15px 7px 0 7px;
  padding: 8px 20px;
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  align-self: center;
  cursor: pointer;
  background-color: transparent;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
  height: 35px;
  border: 1px solid black;
  :hover {
    background-color: #f47070;
    color: white;
    transition: 0.5s;
    border: 1px solid white;
  }
`;

const EditButton = styled.button`
  height: 35px;
  margin: 15px 7px 0 20px;
  padding: 8px 20px;
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  align-self: center;
  cursor: pointer;
  background-color: transparent;
  font-size: 1rem;
  transition: 0.3s ease-in-out;
  border: 1px solid black;
  :hover {
    background-color: #7095f5;
    color: white;
    transition: 0.5s;
    border: 1px solid white;
  }
`;

const ItemNickname = styled.div`

  margin: 0 10px 0 40px;
  border-bottom: 1px solid #878787;
  padding: 25px 5px 1px 5px;
  width: 60px;
  color: black;
  text-align: left;

`;

const ItemContents = styled.div`
  padding: 25px 5px 1px 5px;
  margin-right: 10px;
  border-bottom: 1px solid #878787;
  width: 420px;
  text-align: left;
  color: #000;
`;

// const EditInput = styled.input`
//   border: 0.5px solid white;
//   color: white;
//   margin-left: 10px;
//   padding-left: 20px;
//   ::placeholder {
//     color: white;
//   }
// `;
// .
// const InputPw = styled.input`
//   width: 10%;
//   display: flex;
//   flex-direction: inherit;
//   height: 100%;
//   align-items: center;
//   text-align: center;
//   margin: 0px 10px;
//   place-self: center;
// `;

export default CommentBox;
