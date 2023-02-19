import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import CategoryModal from "../components/CategoryModal";
import Footer from "../components/Footer";
import RecommendItem from "../components/RecommendItem";
import RecentItem from "../components/RecentItem";

const Main = () => {
  return (
    <div id="body-wrapper">
      <div id="body-contents">
        <Link to={"/loginDo"}>
          <div style={{ backgroundColor: "#bdbdbd", height: 100 }}>
            <span>대충 헤더라고 생각 (누르면 로그인으로 이동)</span>
          </div>
        </Link>
        <div>
          <Banner />
          <h3>추천 상품</h3>
          <RecommendItem />
          <h3>최근 상품</h3>
          <RecentItem />
        </div>
        <CategoryModal />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
