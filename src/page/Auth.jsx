import {  useNavigate } from "react-router-dom";

export const Auth = () => {
  const navigate = useNavigate();
  const signinPage = () => {
    navigate("signin");
  };
  const signupPage = () => {
    navigate("signup");
  };

  return (
    <>
      <h1>로그인/회원가입</h1>
      <button onClick={signinPage}>로그인</button>
      <button onClick={signupPage}>회원가입</button>
    </>
  );
};
