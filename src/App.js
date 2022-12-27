import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Detail } from "./page/Detail";
import { NotFound } from "./page/NotFound";
import { Home } from "./page/Home";
import Header from "./components/Header";
import CreatePost from "./page/CreatePost";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<CreatePost />} />
          <Route path="/balance/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
