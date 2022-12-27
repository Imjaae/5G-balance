import Comments from "./Comments";
import Input from "./Input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Comment() {
  const [comments, setComments] = useState();

  return (
    <div>
      <Input comments={comments} setComments={setComments} />
      <Comments comments={comments} setComments={setComments} />
    </div>
  );
}

export default Comment;
