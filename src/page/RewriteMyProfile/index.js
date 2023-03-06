import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import MyPageMenus from "../../components/MyPageMenus";
import MyProfile from "../../components/MyPageProfile"

function RewriteMyProfile() {
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
                            <RewriteId>아이디</RewriteId>
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>비밀번호</RewriteSectionTitle>
                            <RewriteInput type='password' placeholder="영문, 숫자, 특수문자 조합 최소 8자" />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>닉네임</RewriteSectionTitle>
                            <RewriteInput type='text' placeholder="닉네임"/>
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>이름</RewriteSectionTitle>
                            <RewriteInput type='text' placeholder="이름" />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>소개글</RewriteSectionTitle>
                            <RewriteTextarea type='text' placeholder="소개글" />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>이메일</RewriteSectionTitle>
                            <RewriteInput type='email' placeholder="이메일" />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>휴대전화</RewriteSectionTitle>
                            <RewriteInput type='tel' placeholder="전화번호" />
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>거주지역</RewriteSectionTitle>
                            <RewriteRegion>
                                <option>시/도</option>
                            </RewriteRegion>
                            <RewriteRegion>
                                <option>시/구</option>
                            </RewriteRegion>
                        </RewriteSection>
                        <RewriteImgSection>
                            <RewriteSectionTitle>사진</RewriteSectionTitle>
                            <RewriteImgArea>
                                <RewriteImgInput type="" />
                                <RewriteImgTextArea>
                                    <RewriteImgText>회원님을 소개할 수 있는 사진을 등록해 주세요.</RewriteImgText>
                                    <RewriteImgText>등록된 사진은 게시물이나 채팅에 사용됩니다.</RewriteImgText>
                                </RewriteImgTextArea>
                            </RewriteImgArea>
                        </RewriteImgSection>
                        <RewriteTitle>추가 회원정보</RewriteTitle>
                        <RewriteSection>
                            <RewriteSectionTitle>생년월일</RewriteSectionTitle>
                            <RewriteId>생년월일</RewriteId>
                        </RewriteSection>
                        <RewriteSection>
                            <RewriteSectionTitle>성별</RewriteSectionTitle>
                            <RewriteId>성별</RewriteId>
                        </RewriteSection>
                        <RewriteBtnSection>
                            <RewriteBtn>변경하기</RewriteBtn>
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
border: 1px solid red;
margin: auto;
display:flex;
flex-direction: row;`

const RewirteContent = styled.div`
width: 39rem;
margin-top: 2rem;
margin-bottom: 5rem;
border: 1px solid orange;`

const RewriteTitle = styled.p`
font-size: 1rem;
font-weight: 600;`

const RewriteSection = styled.div`
display:flex;
flex-direction: row;
border: 1px solid green;
line-height: 0rem;
margin-bottom: 1rem;`

const RewriteSectionTitle = styled.p`
font-size: 0.84rem;
width: 4rem;
margin-left: 1rem;
margin-right: 1rem;`

const RewriteId = styled.p`
font-size: 0.84rem;`

const RewriteInput = styled.input`
width: 20rem;
height: 1.5rem;
padding: 0rem 0.5rem;`

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
margin-bottom: 2.5rem;
border: 1px solid green;`

const RewriteImgArea = styled.div`
display:flex;
flex-direction: row;`

const RewriteImgInput = styled.input`
width: 8.5rem;
height: 8.5rem;
margin-left: 1rem;
border-radius: 50%;
border: 1px solid green;`

const RewriteImgTextArea = styled.div`
border: 1px solid green;
line-height: 0.72rem;
height: 4rem;
margin: auto 0rem;`

const RewriteImgText = styled.p`
font-size: 0.72rem;
margin-left: 1.5rem;`

const RewriteBtnSection = styled.div`
width: 14rem;
margin: 4rem auto 2rem;
border: 1px solid green;`

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