import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import Banner from "./Banner";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import Footer from "../../components/MainFooter/Footer.js";
import RecommendItem from "./RecommendItem";
import RecentItem from "./RecentItem";
import axios from "axios";

const Main = () => {

    const [currentData, setCurrentData] = useState([]);
    const [popularData, setPopularData] = useState([]);
    const [productCategory, setProductCategory] = useState([]);
    const [region, setRegion] = useState([]);

    useEffect(() => {
        //백엔드로부터 최근 15개의 상품을 가져오는 코드
        axios.get('http://localhost:8000/main')
            .then(response => {
                //console.log(response.data);
                const reData = JSON.parse(response.data.data);
                setCurrentData(reData.current);
                setPopularData(reData.popular);
                if(window.localStorage.getItem("category") == null) {
                    window.localStorage.setItem("category", JSON.stringify(reData.productCategory));
                    window.localStorage.setItem("region", JSON.stringify(reData.region));
                    setProductCategory(reData.productCategory);
                    setRegion(reData.region);
                }
            })
            .catch(error => console.log(error))
    }, []);

    console.log("category: ", JSON.parse(window.localStorage.getItem("category")));
    console.log("region: ", JSON.parse(window.localStorage.getItem("region")));
    return (
        <MyPageSection>
            <MainHeader></MainHeader>
            <div id="body-wrapper">
                <div id="body-contents">
                    <div>
                        <Banner/>
                        <h3>추천 상품</h3>
                        <RecommendItem popularData={popularData}/>
                        <h3>최근 상품</h3>
                        <RecentItem currentData={currentData}/>
                    </div>
                    <CategoryModal/>
                </div>
            </div>
            <Footer/>
        </MyPageSection>
    );
};

const MyPageSection = styled.div`
  display: flex;
  flex-direction: column;`

export default Main;
