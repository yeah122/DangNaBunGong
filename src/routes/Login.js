import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../components/SocialLogin";
import logoImgPath from "../img/logo.png";
import "../style/Login.css";

const Login = () => {
  return (
    <>
      <div className="logo">
        <span className="logo-text">당근나라</span>
        <img src={logoImgPath} alt="당근나라번개공주" width={47} height={85} />
        <span className="logo-text">번개공주</span>
      </div>
      <LoginForm />
      <div className="search-info">
        <span>아이디 찾기</span>
        <span> | </span>
        <span>비밀번호 찾기</span>
        <span> | </span>
        <span>회원가입</span>
      </div>
      <SocialLogin />
    </>
  );
};

export default Login;
