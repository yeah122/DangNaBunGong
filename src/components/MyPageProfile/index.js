import styled from "styled-components";

function MyProfile() {
    return(
        <MyPageProfile>
            <MyPageProfileImg></MyPageProfileImg>
            <MyPageProfileTexts>
                <MyPageProfileText>
                    <MyPageNickName>닉네임</MyPageNickName>
                    <MyPageProfileBtn>프로필 수정</MyPageProfileBtn>
                </MyPageProfileText>
                <MyPageIntroduce>소개글</MyPageIntroduce>
            </MyPageProfileTexts>
        </MyPageProfile>
    )
}

const MyPageProfile = styled.div`
border: 1px solid red;
width: 48.13rem;
height: 15.5rem;
margin: auto;
margin-top: 10rem;
display:flex;
flex-direction: row;`

const MyPageProfileImg = styled.div`
width: 8.5rem;
height: 8.5rem;
border: 1px solid orange;
border-radius: 50%;
margin: auto 1rem auto 3rem;`

const MyPageProfileTexts = styled.div`
width: 30rem;
height: 9rem;
border: 1px solid orange;
margin: auto 0rem auto 1rem;
display:flex;
flex-direction: column;`

const MyPageProfileBtn = styled.button`
width: 4rem;
height: 1.12rem;
font-size: 0.2rem;
padding:0rem;
margin-left: 1rem;
background-color: white;
color: rgb(149,149,149);
border: 1px solid rgb(149,149,149);
border-radius: 5px;
cursor: pointer;`

const MyPageProfileText = styled.div`
display:flex;
flex-direction: row;
line-height: 0rem;
border: 1px solid green;
margin-top: 0.5rem;`

const MyPageNickName = styled.p`
font-size: 1.12rem;
font-weight: 600;
margin-bottom: 0.5rem;`

const MyPageIntroduce = styled.p`
font-size: 0.84rem;
font-weight: 400;
margin-top: 1rem;
border: 1px solid green;`

export default MyProfile;