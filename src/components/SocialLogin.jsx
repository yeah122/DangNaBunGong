import React from "react";
import "../style/Login.css";
import KAKAO_AUTH_URL from "../KakaoAPI";

const SocialLogin = () => {
  const onClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <button className="social btn" onClick={onClick}>
      카카오 로그인
    </button>
  );
};

export default SocialLogin;
