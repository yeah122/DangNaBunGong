import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/MainFooter/Footer.js";
import {Link, useNavigate} from "react-router-dom";
import './this.css';
import React, { useState } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";

function CustomerCenterMyInquiry() {

    const navigate = useNavigate();

    const goChangePw =()=> {
        navigate('/ChangePw')
    }

    const CategoryQuestion = () => {
        var category = ["전체", "개인정보", "알림", "채팅", "게시글", "운영정책", "기타"];
        return(
            <div className={"section"}>
                <ul className="categoryBox-q">
                    {category.map((item, idx) => (
                        <li key={item} className={"width-7"}>
                            <Link className="categoryBox-q-lst" to={`/${item}`} >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const FAQ = () => {
        //질문 목록
        var faqList = ["안녕", "배고파", "집가고싶어", "질문은없어배고파도", "대답은없어목말라도"];
        return(
            <div className={"section"}>
                {faqList.map((item, idx) => {
                    var className = "border-bottom list-content-full";
                    if(idx+1 === faqList.length){
                        className = "list-content-full";
                    }
                    return(
                        <div className={className} style={{"display": "flex", "justify-content": "space-between"}}>
                            <div>
                                <span style={{"margin-right": "5px"}}>Q.</span>
                                <span>{item}</span>
                            </div>
                            <div>
                                <span> > </span>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
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

    return(
        <RewritePage>
            <MainHeader></MainHeader>
            <CustomerMainPage>
                <CustomerMain>
                    <div style={{'width': '100%', 'margin':'10px'}}>
                        <span style={{'border' : '1px solid green', 'font-weight': 'bold'}}>고객센터  > 내 문의 내역</span>
                        <CategoryQuestion/>
                        <FAQ/>
                        <Pagination/>
                    </div>
                </CustomerMain>
            </CustomerMainPage>
            <CategoryModal/>
            <Footer></Footer>
        </RewritePage>
    )
}

const RewritePage = styled.div`
display:flex;
flex-direction: column;`

const CustomerMainPage = styled.div`
display:flex;
flex-direction: column;
margin: 10rem auto auto;`

const CustomerMain = styled.div`
width: 48.13rem;
border: 1px solid red;
margin: auto;
display:flex;
flex-direction: row;`


export default CustomerCenterMyInquiry;