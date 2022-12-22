import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const backToMainPage = () => {
    navigate("/");
  };
  return (
    <>
      <h1>잘못된 페이지입니다.</h1>
      <button onClick={backToMainPage}>홈화면으로</button>
    </>
  );
};
