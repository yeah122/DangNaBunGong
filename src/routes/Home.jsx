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
