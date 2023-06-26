import React, { useEffect, useState }  from "react";
import Item from "../MainPage/Item";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainHeader from "../../components/MainHeader";
import CategoryModal from "../../components/CategoryModal/CategoryModal"; // 이 path에 css 파일 import됨
import Footer from "../../components/MainFooter/Footer.js";
import { productCategory } from "../../components/CategoryModal/CategoryLst copy"
import "./this.css";

function CategoryNav(){

    var groupBy = require('json-groupby'); //npm install json-groupby
    //const productCategory = JSON.parse(window.localStorage.getItem("category")); // 서버에서 받아올 때 버전
    let categoryGroupBy = groupBy(productCategory, ['bcategory', 'bcategory_en']);

    let categories = Object.keys(categoryGroupBy).map(item => ({"name":item, "name_en": Object.keys(categoryGroupBy[item])[0], "sub":categoryGroupBy[item][Object.keys(categoryGroupBy[item])[0]]}));
    console.log(categories);

    const lastCnt = categories.length % 5;
    const checkLast = (categories.length - lastCnt);

    return(
        <div>
            <ul className="categoryBox">
                {categories[8]["sub"].map((item, idx) => (
                    <>
                        {(checkLast > idx) && (
                            <li key={item.pcategoryid} >
                                <Link className="categoryBox-lst" to={`/${item.pcategoryid}`} >
                                    {item.scategory}
                                </Link>
                            </li>
                        )}
                        {(checkLast <= idx) && (
                            <li key={item.pcategoryid} style={{'border-bottom' : 'none'}}>
                                <Link className="categoryBox-lst" to={`/${item.pcategoryid}`} >
                                    {item.scategory}
                                </Link>
                            </li>
                        )}
                    </>
                ))}
            </ul>
        </div>)
}

function ItemList(){
    const [itemLst, setItemLst] = useState([]);

    useEffect(() => {
      //백엔드로부터 최근 15개의 상품을 가져오는 코드
      const data = Array(28)
        .fill()
        .map(() => ({
          id: "123",
          name: "name",
          price: "2000",
          region: "Seoul",
          imgLink: "abc.img",
          link: "/asdf/12345",
        }));
  
      setItemLst(data);
    }, []);
  
    return (
      <div className="items">
        {itemLst.map((item) => (
          <Item item={item} />
        ))}
      </div>
    );
}

function Pagination(){

    return(
        <div class="pagination p1">
            <ul>
                <a href="#"><li>&lt;</li></a> 
                <a class="is-active" href="#"><li>1</li></a>
                <a href="#"><li>2</li></a>
                <a href="#"><li>3</li></a>
                <a href="#"><li>4</li></a>
                <a href="#"><li>5</li></a>
                <a href="#"><li>6</li></a>
                <a href="#"><li>&gt;</li></a>
            </ul>
        </div>
    )
}

const ArticleListPage = () => {
  return (
    <MyPageSection>
      <MainHeader></MainHeader>
      <div id="body-wrapper">
        <div id="body-contents">
          <CategoryNav></CategoryNav>
          <ItemList></ItemList>
          <Pagination></Pagination>
          <CategoryModal />
        </div>
      </div>
      <Footer />
    </MyPageSection>
  );
};

const MyPageSection = styled.div`
display:flex;
flex-direction: column;`

export default ArticleListPage;
