import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/MainFooter/Footer.js";
import MyPageMenus from "../../components/MyPageMenus";
import MyProfile from "../../components/MyPageProfile";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import CategoryModal from "../../components/CategoryModal/CategoryModal";

function RewriteMyProfile() {

    const navigate = useNavigate();

    const goChangePw =()=> {
        navigate('/ChangePw')
    }

    const [Id, setId] = useState(" ");
    const [Name, setName] = useState(" ");
    const [NickName, setNickName] = useState(" ");
    const [Tel, setTel] = useState(" ");
    const [Mail, setMail] = useState(" ");
    const [Region, setRegion] = useState(" ");
    const [Intro, setIntro] = useState(" ");
    const [Photo, setPhoto] = useState(" ");
    const [Time, setTime] = useState(" ");

    const onNickNameHandler = (event) => {
        setNickName(event.currentTarget.value);
    };
    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };
    const onTelHandler = (event) => {
        setTel(event.currentTarget.value);
    };
    const onMailHandler = (event) => {
        setMail(event.currentTarget.value);
    };
    const onRegionHandler = (event) => {
        setRegion(event.currentTarget.value);
    };
    const onIntroHandler = (event) => {
        setIntro(event.currentTarget.value);
    };
    const onPhotoHandler = (event) => {
        setPhoto(event.currentTarget.value);
    };

    const userId = localStorage.getItem('memberId');

    async function PatchData () {
        try{
            const response = await axios.patch("",{
                memberid:Id,
                 membername:Name,
                 membertel:Tel,
                 memberemail:Mail,
                 memberregion : Region,
                 membernickname : NickName,
                 memberintro : Intro,
                 memberphotofp : Photo,
                 memberchanged : Time
            });
            if(response.data.stateCode == 0){
                alert('정상적으로 수정되었습니다.')
                navigate('/MyPage')
            }
            else if(response.data.stateCode == 190){
                alert('변경에 실패하였습니다.')
            }
        }catch(error){}
    }

    async function getInfo() {
        try{
            const response = await axios.get("", {
                memberid : userId
            });
            localStorage.setItem('Nick', response.data.memberInfo.membername);
            localStorage.setItem('Intro', response.data.memberInfo.memberintro);
            localStorage.setItem('Tel', response.data.memberInfo.membertel);
            localStorage.setItem('Birth', response.data.memberInfo.memberbirth);
            localStorage.setItem('Gender', response.data.memberInfo.membergender);
            localStorage.setItem('Region', response.data.memberInfo.memberregion);
            localStorage.setItem('Mail', response.data.memberInfo.membermail);
        }catch(error) {
            console.log(error);
        }
    }

    const nick = localStorage.getItem('Nick');
    const intro = localStorage.getItem('Intro');
    const tel = localStorage.getItem('Tel');
    const birth = localStorage.getItem('Birth');
    const gender = localStorage.getItem('Gender');
    const region = localStorage.getItem('Region');
    const mail = localStorage.getItem('Mail');

    useEffect(()=> {
        getInfo();
    }, []);

    return(
        <RewritePage>
            <MainHeader></MainHeader>
            <RewriteMainPage>
            <MyProfile />
                <RewriteMain>
                    <MyPageMenus />
                    <RewirteContent>
                        <RewriteTitle>기본 회원정보</RewriteTitle>
                        <RewriteSection>
                            <RewriteSectionTitle>아이디</RewriteSectionTitle>
                            <RewriteId>{userId}</RewriteId>
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>비밀번호</RewriteSectionTitle>
                            <RewritePw onClick={goChangePw}>변경하기</RewritePw>
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>닉네임</RewriteSectionTitle>
                            <RewriteInput onChange={onNickNameHandler} type='text' placeholder={nick}/>
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>이름</RewriteSectionTitle>
                            <RewriteInput onChange={onNameHandler} type='text' placeholder="이름" />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>소개글</RewriteSectionTitle>
                            <RewriteTextarea onChange={onIntroHandler} type='text' placeholder={intro} />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>이메일</RewriteSectionTitle>
                            <RewriteInput onChange={onMailHandler} type='email' placeholder={mail} />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>휴대전화</RewriteSectionTitle>
                            <RewriteInput onChange={onTelHandler} type='tel' placeholder={tel} />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>거주지역</RewriteSectionTitle>
                            <RewriteRegion>
                                <option onChange={onRegionHandler}>시/도</option>
                            </RewriteRegion>
                            <RewriteRegion>
                                <option onChange={onRegionHandler}>시/구</option>
                            </RewriteRegion>
                        </RewriteSection>
                        <RewriteImgSection>
                            <RewriteSectionTitle>사진</RewriteSectionTitle>
                            <RewriteImgArea>
                                <RewriteImgInput onChange={onPhotoHandler} type="" />
                                <RewriteImgTextArea>
                                    <RewriteImgText>회원님을 소개할 수 있는 사진을 등록해 주세요.</RewriteImgText>
                                    <RewriteImgText>등록된 사진은 게시물이나 채팅에 사용됩니다.</RewriteImgText>
                                </RewriteImgTextArea>
                            </RewriteImgArea>
                        </RewriteImgSection>
                        <RewriteTitle>추가 회원정보</RewriteTitle>
                        <RewriteSection>
                            <RewriteSectionTitle>생년월일</RewriteSectionTitle>
                            <RewriteId>{birth}</RewriteId>
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>성별</RewriteSectionTitle>
                            <RewriteId>{gender}</RewriteId>
                        </RewriteSection>
                        <RewriteBtnSection>
                            <RewriteBtn onClick={PatchData}>변경하기</RewriteBtn>
                            <RewriteCancle>취소</RewriteCancle>
                        </RewriteBtnSection>
                    </RewirteContent>
                </RewriteMain>
            </RewriteMainPage>
        </RewritePage>
    )
}

const RewritePage = styled.div`
display:flex;
flex-direction: column;`

const RewriteMainPage = styled.div`
display:flex;
flex-direction: column;`

const RewriteMain = styled.div`
width: 48.13rem;
margin: auto;
display:flex;
flex-direction: row;`

const RewirteContent = styled.div`
width: 39rem;
margin-top: 2rem;
margin-bottom: 5rem;`

const RewriteTitle = styled.p`
font-size: 1rem;
font-weight: 600;`

const RewriteSection = styled.div`
display:flex;
flex-direction: row;
border-bottom: 1px solid rgb(189,189,189);
line-height: 0rem;
padding-bottom: 0.3rem;
margin-bottom: 1rem;`

const RewriteSectionTitle = styled.p`
font-size: 0.84rem;
width: 4rem;
margin-right: 1rem;`

const RewriteId = styled.p`
font-size: 0.84rem;`

const RewriteInput = styled.input`
width: 20rem;
height: 1.5rem;
padding: 0rem 0.5rem;`

const RewritePw = styled.button`
width: 5rem;
height: 1.8rem;
border: 1px solid rgb(189,189,189);
border-radius: 5px;
font-size: 0.84rem;
background-color: white;`

const RewriteTextarea = styled.textarea`
min-width: 20rem;
min-height: 5rem;
max-width: 20rem;
max-height: 5rem;
padding: 0rem 0.5rem;`

const RewriteRegion = styled.select`
width: 5rem;
height: 1.5rem;
margin-right: 1.5rem;`

const RewriteImgSection = styled.div`
display:flex;
flex-direction: column;
width: 30rem;
margin-bottom: 2.5rem;`

const RewriteImgArea = styled.div`
display:flex;
flex-direction: row;`

const RewriteImgInput = styled.input`
width: 8.5rem;
height: 8.5rem;
margin-left: 1rem;
border-radius: 50%;`

const RewriteImgTextArea = styled.div`
line-height: 0.72rem;
height: 4rem;
margin: auto 0rem;`

const RewriteImgText = styled.p`
font-size: 0.72rem;
margin-left: 1.5rem;`

const RewriteBtnSection = styled.div`
width: 14rem;
margin: 4rem auto 2rem;`

const RewriteBtn = styled.button`
width: 6rem;
height: 3rem;
background-color: rgb(242,17,17);
color: white;
border: none;
font-size: 1rem;
border-radius: 5px;`

const RewriteCancle = styled.button`
width: 6rem;
height: 3rem;
font-size: 1rem;
border: 1px solid rgb(189,189,189);
background-color: white;
border-radius: 5px;
margin-left: 2rem;`

export default RewriteMyProfile;