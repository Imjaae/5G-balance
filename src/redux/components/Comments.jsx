import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Comments({ comments, setComments }) {
  const [editContents, setEditContents] = useState({ contents: "" });
  // 수정버튼 기능구현
  // const updateComments = (event) => {
  //   this.setComments({ [event.target.Comments]: event.target.value });
  //   console.log(event);
  // };
  const fetchComments = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setComments(data);
  };

  const onClickEditButtonHandler = (contentsId, edit) => {
    // console.log(contentsId, edit);
    // console.log(contents.target.value);
    // if (contents === "") {
    //   alert("입력");
    //   return contents.preventDefault();
    // }\
    axios.patch(`http://localhost:3001/comments/${contentsId}`, edit);
    window.location.reload();
  };

  useEffect(() => {
    fetchComments();
  }, []);
  // console.log(comments);

  // 댓글 삭제기능 구현
  const onClickDeleteButtonHandler = (contentsId) => {
    axios.delete(`http://localhost:3001/comments/${contentsId}`);
    setComments(comments.filter((comment) => comment.id !== contentsId));
  };

  return (
    <CommentsBox>
      {comments.map((item) => {
        return (
          <CommentBox>
            <div
              style={{
                marginRight: "20px",
                border: "solid 1px white",
                padding: "10px",
                width: "100px",
              }}
            >
              {item.nickName}
            </div>
            <div
              style={{
                padding: "10px",
                border: "solid 1px white",
                width: "600px",
                textAlign: "left",
              }}
            >
              {item.contents}
            </div>
            <EditInput
              placeholder="수정값을 입력하세요"
              type="text"
              onChange={(ev) => {
                setEditContents({
                  ...editContents,
                  contents: ev.target.value,
                });
              }}
            />
            <input
              type="text"
              placeholder="비밀번호"
              style={{
                width: "10%",
                display: "flex",
                flexDirection: "inherit",
                height: "100%",
                alignItems: "center",
                textAlign: "center",
                margin: "0px 10px",
                placeSelf: "center",
              }}
            />
            <EditBox
              type="button"
              onClick={() =>
                onClickEditButtonHandler(item.id, editContents, item.contents)
              }
            >
              수정
            </EditBox>
            <EditBox
              type="button"
              onClick={() => onClickDeleteButtonHandler(item.id)}
            >
              삭제
            </EditBox>
          </CommentBox>
        );
      })}
    </CommentsBox>
  );
}

export default Comments;

const CommentBox = styled.h3`
  margin-right: 40px;
  display: flex;
  flex-direction: inherit;
  text-align: center;
  width: 100%;
`;

const CommentsBox = styled.section`
  background-color: #5a7f6d;
  width: 70%;
  height: 100%;
  padding: 30px;
  margin: 30px;
  color: white;
  fontsize: 30px;
  display: inline-block;
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

const Input = styled.input`
  background-color: #5a7f6d;
  color: white;
  box-shadow: none;
  border: 0.5px solid white;
  width: 98%;
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
