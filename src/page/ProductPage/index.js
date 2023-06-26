import MainHeader from "../../components/MainHeader";
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/MainFooter/Footer";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import React from "react";


function ProductPage() {

    const navigate = useNavigate();

    const goSellerPage = () => {
        navigate('/SomeonePage')
    }
    const goChat = () => {
        navigate('/Chat')
    }

        const Settings ={
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoPlay:false,
            arrow: false,
            nextArrow: <NextTo>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
            </NextTo>,
            prevArrow :<PrevTo>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
            </PrevTo>
        }

        const settings = {
            dots: true,
            infinite: true,
            speed:500,
            slidesToShow: 1,
            slidesToScroll : 1,
            autoPlay:false,
            arrow:false,
            nextArrow: <NextTo>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
            </NextTo>,
            prevArrow :<PrevTo>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
            </PrevTo>
        }

    async function getInfo() {
        try {
            const response = await axios.get("", {

            });
            sessionStorage.setItem('title', response.data.articletitle);
            sessionStorage.setItem('content', response.data.articlecontentfp);
            sessionStorage.setItem('price', response.data.articleprice);
            sessionStorage.setItem('region', response.data.articleregionid);
            sessionStorage.setItem('likeNum', response.data.articlelike);
            sessionStorage.setItem('sellMemberId', response.data.sellmemberid);
            sessionStorage.setItem('photo', response.data.photofp);
            sessionStorage.setItem('createdTime', response.data.articlecreatede);
            sessionStorage.setItem('likeCheck', response.data.likecheck);
            sessionStorage.setItem('category', response.data.productcategoryid);
            sessionStorage.setItem('review', response.data.review);
        } catch (error) {
            console.log(error);
        }
    }

    const Title = sessionStorage.getItem('title');
    const Content = sessionStorage.getItem('content');
    const Price = sessionStorage.getItem('price');
    const Region = sessionStorage.getItem('region');
    const LikeNum = sessionStorage.getItem('likeNum');
    const SellMember = sessionStorage.getItem('sellMemberId');
    const Photo = sessionStorage.getItem('photo');
    const CreatedTime = sessionStorage.getItem('createdTime');
    const LikeCheck = sessionStorage.getItem('likeCheck');
    const Category = sessionStorage.getItem('category');
    const Review = sessionStorage.getItem('review');

    useEffect(()=> {
        getInfo();
    }, []);
    
    return(
        <ProductPages>
            <MainHeader />
            <ProductSection>
                <ProductCategory>
                    <p>{Category}</p>
                </ProductCategory>
                <ProductPic>
                    <ProductPics {...settings}>
                        <MainPic>{Photo}</MainPic>
                        <MainPic>2</MainPic>
                    </ProductPics>
                    <ProductMainExplain>
                        <ProductInfos>
                            <ProductInfo>상품 정보</ProductInfo>
                            <ProductInformation>판매자 : <ProductInformation onClick={goSellerPage}>{SellMember}</ProductInformation></ProductInformation>
                            <ProductInformation>상품 이름 : {Title}</ProductInformation>
                            <ProductInformation>가격 : {Price}</ProductInformation>
                            <ProductInformation>거래 지역 : {Region}</ProductInformation>
                            <ProductTime>{CreatedTime}</ProductTime>
                        </ProductInfos>
                        <ButtonSection>
                            <LikeButton>
                                <LikeIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </LikeIcon>
                                <LikeNumber>{LikeNum}</LikeNumber>
                            </LikeButton>
                            <ChatButton onClick={goChat}>채팅하기</ChatButton>
                        </ButtonSection>
                    </ProductMainExplain>
                </ProductPic>
                <ProductSubExplain>
                    <ProductSubExplainTitle>상품 상세정보</ProductSubExplainTitle>
                    <ProductSubContent>{Content}</ProductSubContent>
                </ProductSubExplain>
                <ProductRecommend>
                    <ProductRecommendTitleSection>
                        <ProductRecommendTitle>연관 상품</ProductRecommendTitle>
                    </ProductRecommendTitleSection>
                    <ProductRecommenPicSection>
                        <StyledSlider {...Settings}>
                            <ProductRecommendPic>
                                1
                            </ProductRecommendPic>
                            <ProductRecommendPic>
                                2
                            </ProductRecommendPic>
                            <ProductRecommendPic>
                                3
                            </ProductRecommendPic>
                            <ProductRecommendPic>
                                4
                            </ProductRecommendPic>
                            <ProductRecommendPic>
                                5
                            </ProductRecommendPic>
                            <div>
                                6
                            </div>
                            <div>
                                7
                            </div>
                            <div>
                                8
                            </div>
                        </StyledSlider>
                    </ProductRecommenPicSection>
                </ProductRecommend>
            </ProductSection>
        </ProductPages>

    )
}

const ProductPages = styled.div`
display:flex;
flex-direction: column;`

const ProductSection = styled.div`
width: 48.13rem;
margin: auto;
margin-top: 10rem;
border-top : 1px solid rgb(189,189,189);
display:flex;
flex-direction: column;`

const ProductCategory = styled.div`
width: 48.13rem;
border-bottom: 1px solid rgb(189,189,189);
height: 3rem;`

const ProductPic = styled.div`
width: 100%;
height: 30rem;
display:flex;
flex-direction: row;`

const ProductPics = styled(Slider)`
border: 1px solid green;
width: 20rem;
height: 20rem;
margin: auto;
.slick-arrow {
    display: flex;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }`

const ProductMainExplain = styled.div`
width: 22.2rem;
height: 30rem;
margin: auto;
display:flex;
flex-direction: column;`

const ProductSubExplain = styled.div`
width: 100%;
border-top:1px solid rgb(189,189,189);`

const ProductRecommend = styled.div`
width:100%;
border-top:1px solid rgb(189,189,189);`

const MainPic = styled.div`
width: 20rem;
height: 20rem;
// margin: 5rem auto 1rem;`

const ProductInfos = styled.div`
margin: 7.5rem 0 0.5rem;`

const ProductInfo = styled.p`
font-size: 1.5rem;
font-weight: 600;
margin-bottom: 1rem;`

const ProductInformation = styled.p`
margin: 0.8rem 0`

const ProductTime = styled.p`
font-size: 0.74rem;
font-weight: 500;
color: rgb(142,141,141);`

const LikeButton = styled.button`
width: 4.6rem;
height: 3.68rem;
margin-right: 1.5rem;
cursor: pointer;`

const ChatButton = styled.button`
width: 9rem;
height: 3.68rem;
font-size: 1.25rem;
background-color: rgb(242,17,17);
border: none;
color: white;
cursor: pointer;`

const ButtonSection = styled.div`
display:flex;
flex-direction: row;
width: 15rem;
margin: 0rem auto;`

const LikeIcon = styled.svg`
width: 3.5rem;
height: 2.25rem;
margin: 0rem -0.1rem 0rem;
color: rgb(142,142,142);`

const LikeNumber = styled.p`
font-size: 0.8rem;
color: rgb(142,142,142);
margin: 0rem auto;`

const ProductSubExplainTitle = styled.p`
font-size: 1.2rem;
font-weight: 600;
margin-top: 2rem;`

const ProductSubContent = styled.p`
font-size: 1rem;
margin-bottom: 2.5rem;`

const ProductRecommendTitle = styled.p`
font-size: 1.2rem;
font-weight: 600;`

const ProductRecommendTitleSection = styled.div`
display:flex;
flex-direction: row;
margin-top: 1rem;`

const ProductRecommenPicSection = styled.div`
border: 1px solid blue;
height: 8.75rem;
margin-bottom: 3rem;`

const ProductRecommendPic = styled.div`
width: 8.43rem;
height: 8.43rem;
border: 1px solid blue;
padding: auto 1rem;`

const StyledSlider = styled(Slider)`
  width:100%;
  height: 8.75rem;
  position: relative;
  .slick-arrow {
    display: flex;
    width: 2rem;
    height: 2rem;
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }`

  const NextTo = styled.div`
  display: flex;
  position: absolute;
  fill: white;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: white;
  background-color: rgb(22,22,22,0.2);
  z-index: 3;
  margin: auto;
  margin-right: 1.5rem;
  padding: auto;
  &:hover{
    display: flex;
  position: absolute;
  fill: white;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: white;
  background-color: rgb(22,22,22,0.2);
  z-index: 3;
  margin: auto;
  margin-right: 1.5rem;
  padding: auto;
  }`

  const PrevTo = styled.div`
  display: flex;
  position: absolute;
  fill: white;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: white;
  background-color: rgb(22,22,22,0.2);
  z-index: 3;
  margin: auto;
  margin-left: 1.5rem;
  padding: auto;
  &:hover{
    display: flex;
  position: absolute;
  fill: white;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: white;
  background-color: rgb(22,22,22,0.2);
  z-index: 3;
  margin: auto;
  margin-left: 1.5rem;
  padding: auto;
  }`

export default ProductPage;