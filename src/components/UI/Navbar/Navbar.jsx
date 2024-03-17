import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/Context";
import MyButton from "../../UI/button/MyButton";

const Navbar = () => {
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Go out</MyButton>
      <div className="navbar__links">
        <Link style={{ margin: "20px" }} to="/about">
          About site
        </Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};
export default Navbar;
