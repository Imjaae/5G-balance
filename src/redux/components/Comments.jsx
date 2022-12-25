import React from "react";
import styled from "styled-components";

function Comments({ comments, setComments }) {
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
            <button>수정</button>
            <button>삭제</button>
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
`;

const CommentsBox = styled.section`
  background-color: #5a7f6d;
  width: 90%;
  height: 100%;
  padding: 30px;
  margin: 30px;
  color: white;
  fontsize: 30px;
  display: inline-block;
`;
