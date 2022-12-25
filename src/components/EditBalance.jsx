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
    const edit = {
      ...props.balance,
      choiceDesc: newDesc,
    };
    axios.patch(`http://localhost:3001/balance/${props.id}`, edit);
    props.setOnEdit(false);
    props.setBalance(edit);
  };

  return (
    <form onSubmit={onEditDescBalance}>
      <input onChange={onEditNewDesc} placeholder={props.value} />
      <Button>확인</Button>
    </form>
  );
};
