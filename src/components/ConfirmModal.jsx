import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../UI/Button";
import AXIOS_ADDRESS from "../modules/AxiosAddress";

const Modal = styled.div`
  background-color: #ececec;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: min(60vw, 700px);
  text-align: center;
  height: 35vh;
  position: fixed;
  border-radius: 15px;
  z-index: 1000;
  top: 30vh;
  & input {
    height: 5vh;
    width: 80%;
    margin: 25px 0;
    padding: 5px;
  }

  & h2 {
    color: #f47070;
    font-size: 16px;
    font-weight: 800;
    margin: 15px 0 10px 0;
  }

  & header {
    color: #7095f5;
    font-size: 18px;
    font-weight: 800;
    padding-top: 5px;
    border-radius: 15px 15px 0 0;
  }

  & button {
    transition: all 0.3s ease-in;
  }

  & button:first-child:hover {
    background-color: #7095f5;
  }
  & button:nth-child(2):hover {
    background-color: #f47070;
  }
`;
const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
`;

export const ComfirmModal = ({ confirm, setConfirm, password, id }) => {
  const [checkPw, setCheckPw] = useState("");
  const navigate = useNavigate();

  const onClickCancel = () => {
    setConfirm(!confirm);
  };

  const onEnterPw = (event) => {
    setCheckPw(event.target.value);
  };

  const onDelete = (event) => {
    event.preventDefault();
    if (checkPw !== password || checkPw === "") {
      alert("비밀번호를 입력하지 않았거나 비밀번호가 다릅니다!");
      setCheckPw("");
      document.querySelector(".confirmPw").focus();
      return;
    } else {
      navigate("/");
      axios.delete(`${AXIOS_ADDRESS}/balances/${id}`);
      localStorage.removeItem(id);
    }
  };
  return (
    <form onSubmit={onDelete} className="modal-container">
      <BackDrop />
      <Modal>
        <h2>정말로 삭제하시겠습니까?</h2>
        <header>비밀번호 확인</header>
        <input
          type="text"
          onChange={onEnterPw}
          placeholder="비밀번호를 입력하세요."
          className="confirmPw"
          value={checkPw}
        />
        <div>
          <Button>확인</Button>
          <Button onClick={onClickCancel}>취소</Button>
        </div>
      </Modal>
    </form>
  );
};
