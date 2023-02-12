import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Нэвтрэх</h1>
      <form>
        <label>Овог нэрээ оруулна уу</label>
        <input type="text" className="loginInput" />

        <label >Утасны дугаараа оруулна уу</label>
        <input type="text" className="loginInput" />

        <button type="button">Нэвтрэх </button>
      </form>
      
      <span >
          Бүртгүүлэх бол
          <Link to="/register" className="logAndReg"> энд дарна уу</Link>
        </span>
    </div>
  );
};

export default Login;
