import React from "react";
import { Link } from "react-router-dom";
import Button from "../General/Button";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Нэвтрэх</h1>
      <form>
        <label>И-Мэйл хаягаа оруулна уу</label>
        <input type="email" className="loginInput" />
        <label>Нууц үгээ хийнэ үү</label>
        <input type="password" className="loginInput" />

        <Button text="Нэвтрэх" />
      </form>

      <span>
        Бүртгүүлэх бол
        <Link to="/register" className="logAndReg">
          {" "}
          энд дарна уу
        </Link>
      </span>
    </div>
  );
};

export default Login;
