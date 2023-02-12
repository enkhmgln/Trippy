import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Register = () => {
  return (
    <div className="sign-up">
      <h1>Бүртгүүлэх</h1>
      <form>
        <label>Овог нэрээ оруулна уу</label>
        <input type="text" />

        <label>Утасны дугаараа оруулна уу</label>
        <input type="text" />

        <label>Аялах газраа сонгоно уу</label>
        <select>
          <option value="australia">Ховд сум</option>
          <option value="canada">Жаргалант сум</option>
          <option value="usa">Дарви сум</option>
          <option value="usa">Зэрэг сум</option>
          <option value="usa">Мөнх хайрхан сум</option>
        </select>
        <button type="button">Бүртгүүлэх</button>
      </form>
      <span>
        Нэвтрэх бол
        <Link to="/login" className="logAndReg">
          {" "}
          энд дарна уу
        </Link>
      </span>
    </div>
  );
};

export default Register;
