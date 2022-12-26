import React from "react";
import styled from "styled-components";

export default Content;

function Content({ balance, setBlance }) {
  const handleContentChange = (event) => {
    setBlance({ ...balance, content: event.target.value });
  };
  return (
    <>
      <DetailDiv>
        <h3>밸런스 게임의 간단한 설명을 작성해주세요.</h3>
        <input onChange={handleContentChange} />
        <br />
        <button
          style={{
            margin: "20px, 60px, 20px, 60px",
          }}
        >
          게임 만들기
        </button>
      </DetailDiv>
    </>
  );
}

const DetailDiv = styled.div`
  padding: 20px;
  border: 1px solid black;
  transition: 0.4s;
  input {
    display: block;
    margin: auto;
  }
  button {
    display: block;
    margin: auto;
  }
  :hover {
    h3 {
      color: aliceblue;
    }
  }
`;
