import React, { useState } from "react";
import "../style/Login.css";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "id") {
      setUserName(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="username">
          <input
            className="input"
            name="id"
            value={userName}
            type="text"
            onChange={onChange}
            placeholder="아이디"
          />
        </div>
        <div className="password ">
          <input
            className="input"
            name="password"
            value={password}
            type="password"
            onChange={onChange}
            placeholder="비밀번호"
          />
        </div>
        <input className="login btn" type="submit" value="로그인" />
      </form>
    </>
  );
};

export default LoginForm;
