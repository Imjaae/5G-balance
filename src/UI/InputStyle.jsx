import React from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  border: none;
  margin: 0 10px;
  background-color: transparent;
  border-bottom: 1px solid #000;
  padding-bottom: 5px;
  &:placeholder {
    color: #000;
  }
  &:focus-visible {
    outline: none;
    border-bottom: 3px solid #000;
  }
`;

export default InputStyle;
