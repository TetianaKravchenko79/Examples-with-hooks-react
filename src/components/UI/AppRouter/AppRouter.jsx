import React from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes } from "../../../router/Routes";
import { publicRoutes } from "../../../router/Routes";
import { useContext } from "react";
import { AuthContext } from "../../../context/Context";
import Loader from "../Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
