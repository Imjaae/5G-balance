import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background-color: #d9d9d9;
  padding: 20px 0;
  font-weight: 800;
  font-size: 28px;
  text-align: center;

  & span {
    cursor: pointer;
  }
  & span span:nth-child(1) {
    color: #7095f5;
  }
  & span span:nth-child(2) {
    padding: 0 10px;
  }
  & span span:nth-child(3) {
    color: #f47070;
  }
`;

export const Header = () => {
  const navigate = useNavigate();
  const backToMainPage = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <span onClick={backToMainPage}>
        <span>5G</span>
        <span>=</span>
        <span>Balance</span>
      </span>
    </HeaderContainer>
  );
};
