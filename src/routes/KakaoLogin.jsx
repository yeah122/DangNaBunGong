import React from "react";

const KakaoLogin = () => {
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
};

export default KakaoLogin;
