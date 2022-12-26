import axios from "axios";
import { useState } from "react";
import { Button } from "../UI/Button";

export const EditBalance = (props) => {
  const [newDesc, setNewDesc] = useState("");

  const onEditNewDesc = (event) => {
    setNewDesc(event.target.value);
  };

  const onEditDescBalance = (event) => {
    event.preventDefault();
    if (document.querySelector(".newDesc").value.trim() === "") {
      alert("설명은 1글자 이상, 30자 이내로 설정해 주세요.");
      document.querySelector(".newDesc").focus();
      return;
    } else {
      const edit = {
        ...props.balance,
        choiceDesc: newDesc,
      };
      props.setOnEdit(false);
      return axios.patch("http://localhost:3001/balance/" + props.id, edit);
    }
  };

  return (
    <form onSubmit={onEditDescBalance}>
      <input
        className="newDesc"
        onChange={onEditNewDesc}
        placeholder={props.value}
      />
      <Button>확인</Button>
    </form>
  );
};
