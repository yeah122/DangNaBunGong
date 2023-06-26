import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/MainFooter/Footer.js";
import {Link, useNavigate} from "react-router-dom";
import './this.css';
import React, { useState } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";

function CustomerCenterInquire() {

    const navigate = useNavigate();

    const goChangePw =()=> {
        navigate('/ChangePw')
    }


    const Inquire = () => {
        return(
            <div style={{'border' : '1px solid green', 'height':'500px'}}>
                <form>
                    <div>
                        <label htmlFor={"form-title"}>제목</label>
                        <input type={"text"} name={"title"} id={"form-title"} className={"form-item"} placeholder={"제목을 입력해주세요."}/>
                    </div>
                    <div>
                        <label htmlFor={"form-category"}>카테고리</label>
                        <select name={"category"} id={"form-category"} className={"form-item"} style={{'padding': '0.3rem'}}>
                            <option disabled selected style={{'display':'none'}}>카테고리</option>
                            <option value="1">회원</option>
                            <option value="2">게시글</option>
                            <option value="3">기타</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor={"form-content"}>내용</label>
                        <textarea name={"content"} id={"form-content"} className={"form-item"} placeholder={"내용을 입력해주세요."}></textarea>
                    </div>
                    {/*<div>*/}
                    {/*    <input type={"file"} name={"file"}/>*/}
                    {/*</div>*/}
                    <div id={'form-btn'}>
                        <Link to={"/CustomerCenter"}>
                            <button>등록하기</button>
                        </Link>
                        <Link to={"/CustomerCenter"}>
                            <button>취소</button>
                        </Link>

                    </div>
                </form>
            </div>
        )
    }

    return(
        <RewritePage>
            <MainHeader></MainHeader>
            <CustomerMainPage>
                <CustomerMain>
                    <div style={{'width': '100%', 'margin':'10px'}}>
                        <span style={{'border' : '1px solid green', 'font-weight': 'bold'}}>고객센터  >  1:1 문의</span>
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


export default CustomerCenterInquire;