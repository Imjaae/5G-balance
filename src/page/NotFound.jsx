import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";

export const NotFound = () => {
  const navigate = useNavigate();
  const backToMainPage = () => {
    navigate("/");
  };
  return (
    <>
      <h1>잘못된 페이지입니다.</h1>
      <Button onClick={backToMainPage}>홈화면으로</Button>
    </>
  );
};
