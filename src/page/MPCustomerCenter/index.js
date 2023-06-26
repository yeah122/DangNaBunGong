import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/MainFooter/Footer.js";
import MyPageMenus from "../../components/MyPageMenus";
import MyProfile from "../../components/MyPageProfile";
import {Link, useNavigate} from "react-router-dom";
import './this.css'
import React, { useState } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";

function CustomerCenter() {

    const navigate = useNavigate();

    const goChangePw =()=> {
        navigate('/ChangePw')
    }

    let [myInquiry, setMyInquiry] = useState(true);
    let [inquire, setInquire] = useState(false);
    const TabMenu = () => {

        return(
            <div style={{'border' : '1px solid green'}}>
                <ul>
                    <li className={'tab-header' + (myInquiry ? ' active' : '')}>
                        <a onClick={event=>{
                            event.preventDefault();
                            setMyInquiry(true);
                            setInquire(false);
                        }}>내 문의</a>
                    </li>
                    <li className={'tab-header' + (inquire ? ' active' : '')}>
                        <a onClick={event=>{
                            event.preventDefault();
                            setMyInquiry(false);
                            setInquire(true);
                        }}>문의하기</a>
                    </li>
                </ul>
            </div>
        )
    }

    const MyInquiry = () => {
        return(
            <div className={'tab-item' + (myInquiry ? ' active-target' : '')} style={{'border' : '1px solid green', 'height':'500px'}}>
                <span style={{'border' : '1px solid green'}}>내 문의 목록</span>
                <div>
                    <select style={{'float':'right'}}>
                        <option selected>전체</option>
                        <option>회원</option>
                        <option>게시글</option>
                        <option>기타</option>
                    </select>
                </div>
                <div style={{'margin':'10px'}}>
                    <ul>
                        <li>
                            <Link to={'/'}>
                                <span>title</span>
                                <div>content</div>
                                <span>답변중</span>
                            </Link>
                        </li>
                        <li>
                            <div>
                                <span>title</span>
                                <div>content</div>
                                <span>답변완료</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

    const Inquire = () => {
        return(
            <div className={'tab-item' + (inquire ? ' active-target' : '')} style={{'border' : '1px solid green', 'height':'500px'}}>
                <span style={{'border' : '1px solid green'}}>문의하기</span>
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
                        <textarea type={"text"} name={"content"} id={"form-content"} className={"form-item"} placeholder={"내용을 입력해주세요."}></textarea>
                    </div>
                    {/*<div>*/}
                    {/*    <input type={"file"} name={"file"}/>*/}
                    {/*</div>*/}
                    <div id={'form-btn'}>
                        <button>등록하기</button>
                        <button>취소</button>
                    </div>
                </form>
            </div>
        )
    }

    return(
        <RewritePage>
            <MainHeader></MainHeader>
            <CustomerMainPage>
                <MyProfile />
                <CustomerMain>
                    <MyPageMenus />
                    <div style={{'width': '100%', 'margin':'10px'}}>
                        <span style={{'border' : '1px solid green'}}>고객센터</span>
                        <TabMenu/>
                        <MyInquiry/>
                        <Inquire/>
                        <span style={{'border' : '1px solid green'}}>
                            <Link to={"/CustomerCenter"}>
                            고객센터 바로가기 (작은 글씨로 하단에)
                            </Link>
                        </span>
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
flex-direction: column;`

const CustomerMain = styled.div`
width: 48.13rem;
border: 1px solid red;
margin: auto;
display:flex;
flex-direction: row;`


export default CustomerCenter;