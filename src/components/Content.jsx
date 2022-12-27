import React from "react";
import styled from "styled-components";

export default Content;

function Content({ balance, setBalance, handleContentsSubmit }) {
  const handleContentChange = (event) => {
    setBalance({ ...balance, contents: event.target.value });
  };
  return (
    <>
      <DetailDiv>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          밸런스 게임의 간단한 설명을 작성해주세요.
        </h3>
        <textarea
          onChange={handleContentChange}
          type="text"
          // placeholder="최대 30자 이하 입력 가능"
        />
        <br />
        <button
          onClick={() => {
            handleContentsSubmit();
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
  transition: 0.4s;
  textarea {
    border: 0 solid black;
    background-color: #d6d4ce;
    display: block;
    margin: auto;
    height: 15vh;
    width: 50vw;
  }
  button {
    display: block;
    margin: auto;
    padding: 10px;
  }
`;
