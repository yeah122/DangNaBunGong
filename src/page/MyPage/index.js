import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import MyPageMenus from "../../components/MyPageMenus";
import MyProfile from "../../components/MyPageProfile";
import Footer from "../../components/MainFooter/Footer";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import React from "react";
import axios from "axios";
import { useEffect } from "react";

function MyPage() {

    const userId = localStorage.getItem('memberId');

    async function getInfo() {
        try{
            const response = await axios.get("", {
                memberid : userId
            });
            localStorage.setItem('BuyList', response.data.buyList.photo_fp);
            localStorage.setItem('LikeList', response.data.likeList.photo_fp);
            localStorage.setItem('SellList', response.data.sellList.photo_fp);
        }catch(error) {
            console.log(error);
        }
    }

    const BuyList = localStorage.getItem('BuyList');
    const LikeList = localStorage.getItem('LikeList');
    const SellList = localStorage.getItem('SellList');

    useEffect(()=> {
        getInfo();
    }, []);

    return(
        <MyPageSection>
            <MainHeader />
            <MyProfile/>
            <MyPageMain>
                <MyPageMenus />
                <MyPageContent>
                    <MyProduct>
                        <MyProductTitle>판매 내역</MyProductTitle>
                        <MyProductSection>
                            <MyProductPic>{SellList}</MyProductPic>
                        </MyProductSection>
                    </MyProduct>
                    <MyProduct>
                        <MyProductTitle>구매 내역</MyProductTitle>
                        <MyProductSection>
                            <MyProductPic>{BuyList}</MyProductPic>
                        </MyProductSection>
                    </MyProduct>
                    <MyProduct>
                        <MyProductTitle>찜 목록</MyProductTitle>
                        <MyProductSection>
                            <MyProductPic>{LikeList}</MyProductPic>
                        </MyProductSection>
                    </MyProduct>
                    <MyReview>
                        <MyProductTitle>거래 후기</MyProductTitle>
                    </MyReview>
                </MyPageContent>
            </MyPageMain>
            <CategoryModal/>
            <Footer></Footer>
        </MyPageSection>
    )
}

const MyPageSection = styled.div`
display:flex;
flex-direction: column;`

const MyPageMain = styled.div`
width: 48.13rem;
margin: auto;
display:flex;
flex-direction: row;`

const MyPageContent = styled.div`
width: 39rem;
display:flex;
flex-direction: column;`

const MyProduct = styled.div`
height: 14.375rem;
width: 100%;
display:flex;
flex-direction: column;`

const MyProductTitle = styled.p`
font-size: 0.84rem;
font-weight: 600;
margin-left: 1rem;
margin-top: 1.5rem;`

const MyProductSection = styled.div`
height: 8.125rem;
margin: 1rem 1rem 0rem 1rem;
display:flex;
flex-direction: row;`

const MyProductPic = styled.div`
width: 6rem;
height: 6rem;
margin: 1rem 1.5rem auto 0rem;`

const MyReview = styled.div`
width: 100%;
display:flex;
flex-direction: row;`

export default MyPage;