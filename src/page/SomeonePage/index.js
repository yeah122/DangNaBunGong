import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/MainFooter/Footer";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import React from "react";

function SomeonePage() {
    return(
        <SomeoneArea>
            <MainHeader />
            <MyPageProfile>
            <MyPageProfileImg></MyPageProfileImg>
            <MyPageProfileTexts>
                <MyPageProfileText>
                    <MyPageNickName>상대 닉네임</MyPageNickName>
                </MyPageProfileText>
                <MyPageIntroduce>소개글</MyPageIntroduce>
            </MyPageProfileTexts>
            </MyPageProfile>
            <SomeoneSection>
                <SomeoneRegion>
                    <SomeoneRegionTitle>지역</SomeoneRegionTitle>
                    <SomeoneRegionContent>서울 종로구</SomeoneRegionContent>
                </SomeoneRegion>
                <SomeoneSell>
                    <SomeoneSellTitleSection>
                        <SomeoneSellTitle>판매 내역</SomeoneSellTitle>
                        <SomeoneSellBtn>더보기</SomeoneSellBtn>
                    </SomeoneSellTitleSection>
                    <SomeoneSellSection>
                        <SomeoneSellContent></SomeoneSellContent>
                        <SomeoneSellContent></SomeoneSellContent>
                        <SomeoneSellContent></SomeoneSellContent>
                        <SomeoneSellContent></SomeoneSellContent>
                        <SomeoneSellContent></SomeoneSellContent>
                    </SomeoneSellSection>
                </SomeoneSell>
                <SomeoneReview>
                    <SomeoneReviewTitle>거래 후기</SomeoneReviewTitle>
                    <SomeoneReviewContent></SomeoneReviewContent>
                </SomeoneReview>
            </SomeoneSection>
            <CategoryModal/>
            <Footer></Footer>
        </SomeoneArea>
    )
}

const SomeoneArea = styled.div`
display:flex;
flex-direction: column;`

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

const SomeoneSection = styled.div`
width: 48.13rem;
margin: auto;
border: 1px solid red;`

const SomeoneRegion = styled.div`
width: 15rem;
display:flex;
flex-direction: row;
height: 3rem;
margin: 1.5rem 0rem 1.5rem 3rem;
border: 1px solid orange;`

const SomeoneRegionTitle = styled.p`
font-size: 1rem;
font-weight: 600;
margin: auto 0rem auto 0.5rem;`

const SomeoneRegionContent = styled.p`
font-size: 0.84rem;
font-weight: 400;
margin: auto auto auto 1rem;`

const SomeoneSell = styled.div`
width: 42.13rem;
height: 10rem;
border: 1px solid orange;
margin: auto;
display:flex;
flex-direction: column;`

const SomeoneSellTitleSection = styled.div`
display:flex;
flex-direction: row;
width: 41.13rem;`

const SomeoneSellTitle = styled.p`
margin: 0rem 0.5rem 0.5rem;
font-size: 1rem;
font-weight: 600;`

const SomeoneSellBtn = styled.button`
width: 3rem;
height: 1.5rem;
margin-left: auto;
border-radius: 5px;
background-color: white;
color: rgb(149,149,149);
border: 1px solid rgb(149,149,149);
font-size: 0.5rem;
cursor: pointer;`

const SomeoneSellSection = styled.div`
width: 41.13rem;
height: 8rem;
margin: 0rem 0.5rem;
border: 1px solid green;
display:flex;
flex-direction: row;`

const SomeoneSellContent = styled.div`
width: 7rem;
height: 7rem;
margin: auto 1rem auto 0rem;
border: 1px solid blue;`

const SomeoneReview = styled.div`
width: 42.13rem;
margin: 1.5rem auto;
border: 1px solid orange;`

const SomeoneReviewTitle = styled.p`
font-size: 1rem;
font-weight: 600;
margin: 0rem 0rem 0.5rem 0.5rem`

const SomeoneReviewContent = styled.div`
width: 41.13rem;
border: 1px solid green;
height: 5rem;
margin: 0rem auto 0.5rem;`

export default SomeonePage;