import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/MainFooter/Footer.js";
import {Link, useNavigate} from "react-router-dom";
import './this.css';
import React, { useState } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";

function CustomerCenterMain() {

    const navigate = useNavigate();

    const goChangePw =()=> {
        navigate('/ChangePw')
    }

    const Search = () => {
        return(
            <div className={"section"}>
                <form>
                    <SearchBarSection>
                        <span style={{"width":"100%", "position":"relative"}}>
                            <SearchBar type='search'></SearchBar>
                            <SearchIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </SearchIcon>
                        </span>
                    </SearchBarSection>
                    <div>

                    </div>

                </form>
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
                        <div className={className} style={{"display": "flex", "justify-content": "space-between"}} onClick={()=> {navigate("/CustomerCenter/Detail")}}>
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

    const CategoryQuestion = () => {
        var category = ["개인정보", "알림", "채팅", "게시글", "운영정책", "기타"];
        return(
            <div className={"section"}>
                <ul className="categoryBox-q">
                    {category.map((item, idx) => (
                        <li key={item} className={"width-6"}>
                            <Link className="categoryBox-q-lst" to={`/${item}`} >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const Inquire = () => {
        var faqList = ["1:1 문의하기", "내 문의 내역"];
        return(
            <div className={"section"}>
                <div className={"border-bottom list-content-full"} style={{"display": "flex", "justify-content": "space-between"}}>
                    <div>
                        <span style={{"margin-left": "5px"}}>
                            <Link to={'/CustomerCenter/Inquire'} className={"categoryBox-q-lst"}>{faqList[0]}</Link>
                        </span>
                    </div>
                </div>
                <div className={"list-content-full"} style={{"display": "flex", "justify-content": "space-between"}}>
                    <div>
                        <span style={{"margin-left": "5px"}}>
                            <Link to={'/CustomerCenter/MyInquiry'} className={"categoryBox-q-lst"}>{faqList[1]}</Link>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <RewritePage>
            <MainHeader></MainHeader>
            <CustomerMainPage>
                <CustomerMain>
                    <div style={{'width': '100%', 'margin':'10px'}}>
                        <span style={{'border' : '1px solid green', 'font-weight': 'bold'}}>고객센터</span>
                        <Search/>
                        <div style={{"justify-content": "space-between", "display": "flex"}}>
                            <span style={{'border' : '1px solid green', 'font-weight': 'bold'}}>자주 묻는 질문</span>
                            <span style={{'border' : '1px solid green', "font-size": "12px"}}>
                                <Link to={'/CustomerCenter/FAQ'} className={"categoryBox-q-lst"}>더보기</Link>
                            </span>
                        </div>
                        <FAQ/>
                        <span style={{'border' : '1px solid green', 'font-weight': 'bold'}}>카테고리별 질문</span>
                        <CategoryQuestion/>
                        <span style={{'border' : '1px solid green', 'font-weight': 'bold'}}>문의하기</span>
                        <Inquire/>

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

const SearchBarSection = styled.div`
display:flex;
flex-direction: row;`

const SearchBar = styled.input`
border: 2px solid #BCBCBC;
width: 100%;
height: 2.5rem;
margin: auto;
padding-left: 0.5rem;
padding-right: 2rem;`

const SearchIcon = styled.svg`
  color: #7b7b7b;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: 1%;
  top: 20%;
  cursor: pointer;`

export default CustomerCenterMain;