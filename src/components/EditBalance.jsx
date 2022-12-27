import axios from "axios";
import { useState } from "react";
import { Button } from "../UI/Button";

export const EditBalance = (props) => {
  const [newDesc, setNewDesc] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const onEditNewDesc = (event) => {
    setNewDesc(event.target.value);
  };

  const onEnterPw = (event) => {
    setCheckPw(event.target.value);
  };
  const onEditDescBalance = (event) => {
    event.preventDefault();
    if (checkPw.trim() === "" || checkPw !== props.data.password) {
      alert("잘못된 비밀번호를 입력했거나 비밀번호를 입력하지 않았습니다!");
      setCheckPw("");
      document.querySelector("#newDesc").focus();
    } else {
      if (newDesc.trim() === "" || newDesc.length > 30) {
        alert("설명은 1자 이상, 30자 이하로 작성해 주세요.");
        document.querySelector("#confirmPw").focus();
        setNewDesc("");
      } else {
        const edit = {
          ...props.data,
          choiceDesc: newDesc,
        };
        props.setOnEdit(false);
        return axios.patch("http://localhost:3001/balance/" + props.id, edit);
      }
    }
  };

  return (
    <form onSubmit={onEditDescBalance}>
      <div>
        <label htmlFor="confirmPw">비밀번호</label>
        <input
<<<<<<< Updated upstream
          type="text"
=======
          type="password"
>>>>>>> Stashed changes
          id="confirmPw"
          placeholder="비밀번호를 입력해주세요"
          onChange={onEnterPw}
          value={checkPw}
        />
      </div>
      <input
        className="newDesc"
        onChange={onEditNewDesc}
        placeholder={props.value}
      />
      <Button>확인</Button>
    </form>
  );
};
