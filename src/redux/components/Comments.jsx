import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommentBox from "./CommentBox";
import { useParams } from "react-router-dom";
function Comments({ comments, setComments }) {
  // 수정버튼 기능구현
  // const updateComments = (event) => {
  //   this.setComments({ [event.target.Comments]: event.target.value });
  //   console.log(event);
  // };
  const { id } = useParams();

  const fetchComments = async () => {
    const { data } = await axios.get(
      `http://localhost:3001/comments/?postId=${id}`
    );
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);
  // console.log(comments);

  // 댓글 삭제기능 구현

  return (
    <CommentsBox>
      {comments?.map((item) => {
        return (
          <CommentBox
            item={item}
            comments={comments}
            setComments={setComments}
          />
        );
      })}
    </CommentsBox>
  );
}

export default Comments;

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
