import React from "react";
import { Link } from "react-router-dom";
import Button from "../General/Button";
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
          <option value="khovd">Ховд сум</option>
          <option value="jargalant">Жаргалант сум</option>
          <option value="darvi">Дарви сум</option>
          <option value="zereg">Зэрэг сум</option>
          <option value="munkh-khairkhan">Мөнх хайрхан сум</option>
        </select>
        <Button
        text='Бүртгүүлэх'
        />
      </form>
      <span>
        Нэвтрэх бол
        <Link to="/login" className="logAndReg">
          энд дарна уу
        </Link>
      </span>
    </div>
  );
};

export default Register;
