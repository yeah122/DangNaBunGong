import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/MainFooter/Footer.js";
import {Link, useNavigate} from "react-router-dom";
import './this.css';
import React, { useState } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";

function CustomerCenterDetail() {

    const navigate = useNavigate();

    const goChangePw =()=> {
        navigate('/ChangePw')
    }

    const goBack =()=> {
        navigate(-1)
    }

    const content = "오 사랑아 조금만 더 버텨주오 나는 너무나도 쉽게 사랑에 뛰어드는 마음이야 아 그대야 조금만 더 버텨주오 나는 너무나도 쉽게 당신을 사랑했던 마음이야 아 그대야 왜 당신의 시선은 나의 테두리에 머물러 아 그대야 왜 당신의 소리는 사랑 하나 없이 몰려와 나를 슬프게 하나 사라지는 순간들을 한데 모아 감히 돌아갈 수 있는 순간을 내가 찾아갈 수 있게 해주오 사라지는 사람들을 한데 모아 감히 살아갈 수 있는 마음을 내가 찾아갈 수 있게 해주오"

    const Inquire = () => {
        return(
            <div style={{'border' : '1px solid green', 'height':'500px'}}>
                <form>
                    <div>
                        <label htmlFor={"form-title"}>제목</label>
                        <span name={"title"} id={"form-title"} className={"form-item"}>이것은 제목이어라</span>
                    </div>
                    <div>
                        <label htmlFor={"form-category"}>카테고리</label>
                        <span name={"category"} id={"form-category"} className={"form-item"}>이것은 카테고리</span>
                    </div>
                    <div>
                        <label htmlFor={"form-content"}>내용</label>
                        <span name={"content"} id={"form-content"} className={"form-item"}>{content}</span>
                    </div>
                    {/*<div>*/}
                    {/*    <input type={"file"} name={"file"}/>*/}
                    {/*</div>*/}
                    <div>
                        <button onClick={goBack}>목록</button>
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
                        <span style={{'border' : '1px solid green', 'font-weight': 'bold'}}>고객센터  >  상세</span>
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


export default CustomerCenterDetail;