import React from "react";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";
import "../style/Login.css";
import { Link } from "react-router-dom";

const Login = ({ LogoImg }) => {
  /*
  로고 -> 로그인 폼 -> ㅇㅇ찾기 -> 소셜로그인
  */
  return (
    <>
      <Link to={"/"}>
        <div className="logo">
          <span className="logo-text">당근나라</span>
          <img src={LogoImg} alt="당근나라번개공주" width={47} height={85} />
          <span className="logo-text">번개공주</span>
        </div>
      </Link>

      <LoginForm />

      <div className="search-info">
        <Link to={"/searchID"}>
          <span>아이디 찾기</span>
        </Link>
        <span> | </span>
        <Link to={"/searchPassword"}>
          <span>비밀번호 찾기</span>
        </Link>
        <span> | </span>
        <Link to={"/memberJoinDo"}>
          <span>회원가입</span>
        </Link>
      </div>

      <SocialLogin />
    </>
  );
};

export default Login;
