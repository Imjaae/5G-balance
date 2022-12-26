import React from "react";

export default Input;

function Input({ balance, setBlance }) {
  // titleA는 왼쪽 밸런스 기입 박스, titleB는 오른쪽 박스입니다.

  const handleTitleAChange = (event) => {
    setBlance({ ...balance, titleA: event.target.value });
  };

  const handleTitleBChange = (event) => {
    setBlance({ ...balance, titleB: event.target.value });
  };
  return (
    <>
      <h3>밸런스를 작성해주세요.</h3>
      <p>(밸런스 문제 수정은 불가합니다.)</p>
      <div>
        <input onChange={handleTitleAChange} />
        VS
        <input onChange={handleTitleBChange} />
      </div>
    </>
  );
}
