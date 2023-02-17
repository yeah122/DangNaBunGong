import React from "react";
import { Link } from "react-router-dom";
import CategoryModal from "../components/CategoryModal";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="body-contents">
        <div>
          <Link to={"/loginDo"}>
            <button>로그인</button>
          </Link>
        </div>
        <CategoryModal />
      </div>
      <Footer />
    </>
  );
};

export default Home;
