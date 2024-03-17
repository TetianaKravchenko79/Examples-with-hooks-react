import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../context/Context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log(isAuth);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Page for registration</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter login"></MyInput>
        <MyInput type="password" placeholder="Enter password"></MyInput>
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};
export default Login;
