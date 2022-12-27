import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  // 로그인, 회원가입 선택 페이지로 이동하는 함수
  const goAuth = () => {
    navigate("/auth");
  };

  const goCreatePost = () => {
    navigate("/post");
  };

  return (
    <HeaderBox>
      <HeaderInnerBox></HeaderInnerBox>
      <HeaderLink to="/">5G = BALANCE</HeaderLink>
      <HeaderInnerBox>
        {/* currentUid?로 로그인 여부 확인해서 로그인 하면 로그아웃으로 바꾸기 */}
        {/* <ButtonStyles onClick={goAuth} textColor="F47070">
          로그인
        </ButtonStyles> */}
        <ButtonStyles onClick={goCreatePost} textColor="7095F4">
          게임만들기
        </ButtonStyles>
      </HeaderInnerBox>
    </HeaderBox>
  );
};

// CSS

const HeaderBox = styled.header`
  width: 100%;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid #cccccc;
`;

const HeaderInnerBox = styled.div`
  width: 33.333%;
  text-align: right;
`;

const HeaderLink = styled(Link)`
  width: 33.333%;
  text-align: center;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: #ffd601;
    }
  }
`;

const ButtonStyles = styled.button`
  cursor: pointer;
  background-color: transparent;
  padding: 8px 20px;
  margin: 0 0 5px;
  box-sizing: border-box;
  border: 1px solid #000;
  transition: 0.3s ease-in-out;
  font-size: 1rem;
  @media (hover: hover) {
    &:hover {
      color: #${(props) => props.textColor};
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
  }
`;

export default Header;
