import styled from "styled-components";

export const StatusBar = styled.div`
  width: 80%;
  height: 5vh;
  background-color: #f47070;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 0.8rem;
  color: white;
  & span {
    padding: 0 10px;
  }
  & span::after {
    content: "표";
  }
`;
