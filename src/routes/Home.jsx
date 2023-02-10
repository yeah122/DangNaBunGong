/*
그냥 메인 페이지라고 생각해보고 만든 화면
*/
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/loginDo"}>
        <button>로그인</button>
      </Link>
    </div>
  );
};

export default Home;
