import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import { Auth } from "./page/Auth";
import { CreatePost } from "./page/CreatePost";
import { Detail } from "./page/Detail";
import { NotFound } from "./page/NotFound";
import { Home } from "./page/Home";
import { Signin } from "./page/Signin";
import { Signup } from "./page/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "balance/:id",
        element: <Detail />,
      },
      {
        path: "createpost",
        element: <CreatePost />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "auth/signin",
        element: <Signin />,
      },
      {
        path: "auth/signup",
        element: <Signup />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
