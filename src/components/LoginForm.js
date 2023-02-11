import React, { useState } from "react";
import "../style/Login.css";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (event) => {
    // id, password 각각의 입력값이 변경될 때 화면에 표시되는 값도 변경
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
    // 로그인
    event.preventDefault();
  };

  /*
  아이디 입력창 -> 비밀번호 입력창 -> 로그인 버튼
  */
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
