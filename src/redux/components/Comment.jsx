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
    nickName: "임재영",
    contents: "댓글내용입니다",
    id: uuidv4(),
  },
];
