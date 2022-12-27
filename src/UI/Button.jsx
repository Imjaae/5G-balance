import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  return (
    <ButtonStyle
      // style
      borderHoverColor={props.borderHoverColor}
      fontSize={props.fontSize}
      hoverColor={props.hoverColor}
      Margin={props.Margin}
      //   기능
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 8px 20px;
  margin: ${(props) => props.Margin};
  box-sizing: border-box;
  border: 1px solid #000;
  transition: 0.3s ease-in-out;
  font-size: ${(props) => props.fontSize};

  @media (hover: hover) {
    &:hover:not([disabled]) {
      color: #${(props) => props.hoverColor};
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      border: 1px solid #${(props) => props.borderHoverColor};
    }
  }
`;

ButtonStyle.defaultProps = {
  fontSize: "1rem",
  hoverColor: "000",
  borderHoverColor: "000",
  Margin: "0",
};

export default Button;
