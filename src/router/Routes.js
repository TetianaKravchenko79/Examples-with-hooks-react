import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";

import Login from "../pages/Login";
import About from "../pages/About";

export const publicRoutes = [
  {
    path: "*",
    element: <Login />,
  },
];

export const privateRoutes = [
  { path: "*", element: <Posts /> },
  { path: "/posts/:id", element: <PostIdPage /> },
  { path: "/about", element: <About /> },
];
