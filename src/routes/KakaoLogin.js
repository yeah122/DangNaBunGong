import React from "react";

const KakaoLogin = () => {
  // 카카오 로그인 인가 코드만 추출
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  // 백엔드로 인가 코드를 넘기는 코드를 짜야 함
};

export default KakaoLogin;
