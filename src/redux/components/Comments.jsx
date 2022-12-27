import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import CommentBox from "./CommentBox";
import { useParams } from "react-router-dom";
import AXIOS_ADDRESS from "../../modules/AxiosAddress";

function Comments({ comments, setComments }) {
  // 수정버튼 기능구현
  const { id } = useParams();

  const fetchComments = async () => {
    const { data } = await axios.get(`${AXIOS_ADDRESS}/comments/?postId=${id}`);
    setComments(data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

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
  border-bottom: solid gray 0.5px;
  width: 70%;
  height: 100%;
  padding: 30px;
  margin: 30px;
  color: white;
  font-size: 30px;
  display: inline-block;
`;
