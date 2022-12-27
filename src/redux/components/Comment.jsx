import Comments from "./Comments";
import Input from "./Input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Comment() {
  const [comments, setComments] = useState(initialState);

  return (
    <div>
      <Input comments={comments} setComments={setComments} />
      <Comments comments={comments} setComments={setComments} />
    </div>
  );
}

export default Comment;

const initialState = [
  {
    nickName: "닉네임1",
    contents: "댓글내용입니다1",
    id: uuidv4(),
    userId: "userId",
    password: 0,
    // isDone: false(),
  },
  {
    nickName: "닉네임2",
    contents: "댓글내용입니다2",
    id: uuidv4(),
    password: 0,
    // isDone: false(),
  },
  {
    nickName: "닉네임3",
    contents: "댓글내용입니다3",
    id: uuidv4(),
    password: 0,
    // isDone: false(),
  },
];
