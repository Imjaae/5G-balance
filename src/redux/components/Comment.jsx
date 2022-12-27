import Comments from "./Comments";
import Input from "./Input";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Comment() {
  const [comments, setComments] = useState();

  return (
    <CommentWrap>
      <Input comments={comments} setComments={setComments} />
      <Comments comments={comments} setComments={setComments} />
    </CommentWrap>
  );
}

const CommentWrap = styled.div`
  padding: 50px 0;
  margin-top: 30px;
  border-top: 1px solid #cccccc;
`;

export default Comment;
