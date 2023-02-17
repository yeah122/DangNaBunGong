import React, { useState } from "react";
import "../style/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

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

  const onSubmit = async (event) => {
    // 로그인
    event.preventDefault();
    try {
      if (userName === "" || password === "") {
        alert("아이디와 비밀번호를 입력해주세요.");
      } else {
        const response = await axios.post("", {
          memberid: userName,
          memberpw: password,
        });
        console.log(response);

        //response.data.stateCode로 하면 될 듯
        if (response.data.code === 0) {
          //로그인 성공
          localStorage.setItem("userInfo", response.data.result.jwt);
          navigate("/");
        } else if (response.data.code === 207) {
          //존재하지 않는 아이디
          alert("존재하지 않는 아이디입니다.");
        } else if (response.data.code === 208) {
          //아이디나 비밀번호 오류
          alert("아이디나 비밀번호가 잘못되었습니다.");
        } else if (response.data.code === 200) {
          //회원정보가 잘못 됨
          alert("회원정보가 잘못되었습니다. 고객센터에 문의해주세요.");
        }
      }
    } catch (error) {
      console.log(error);
    }
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
