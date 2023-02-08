import React, { useState } from "react";

const Login = () => {
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
        <div>
          <input
            name="id"
            value={userName}
            type="text"
            onChange={onChange}
            placeholder="아이디"
          />
        </div>
        <div>
          <input
            name="password"
            value={password}
            type="password"
            onChange={onChange}
            placeholder="비밀번호"
          />
        </div>
        <input type="submit" value="로그인" />
      </form>

      <div>
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
        <span>회원가입</span>
      </div>
      <div>
        <button>카카오 로그인</button>
      </div>
    </>
  );
};

export default Login;
