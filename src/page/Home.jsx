import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const goToDetailPage = (event) => {
    navigate(`/balance/${event.target.id}`);
  };

  return (
    <>
      <h1>메인페이지</h1>
      <button id="tZmyKkm" onClick={goToDetailPage}>
        테스트 상세페이지1
      </button>
      <button id="rdO5boD" onClick={goToDetailPage}>
        테스트 상세페이지2
      </button>
    </>
  );
};
