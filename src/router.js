import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import { Auth } from './page/Auth';
import { Detail } from './page/Detail';
// import { NotFound } from './page/NotFound';
import { Home } from './page/Home';
import { Signin } from './page/Signin';
import { Signup } from './page/Signup';
import CreatePost from './page/CreatePost';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'balance/:id',
        element: <Detail />,
      },
      {
        path: 'auth',
        element: <Auth />,
      },
      {
        path: 'auth/signin',
        element: <Signin />,
      },
      {
        path: 'auth/signup',
        element: <Signup />,
      },
      {
        path: 'post',
        element: <CreatePost />,
      },
    ],
    // errorElement: <NotFound />,
  },
]);
