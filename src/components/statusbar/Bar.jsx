import styled from "styled-components";

export const Bar = styled.div`
  background-color: #7095f5;
  height: 100%;
  width: ${(props) => (props.choice1 / (props.choice1 + props.choice2)) * 100}%;
  transition: background-color 1s ease-in;
  display: flex;
  align-items: center;
  padding: 0 10px;
  & span::after {
    content: "표";
  }
`;
