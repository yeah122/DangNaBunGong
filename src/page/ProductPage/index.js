import MainHeader from "../../components/MainHeader";
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ProductPage() {

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
    
    return(
        <ProductPages>
            <MainHeader />
            <ProductSection>
                <ProductCategory>
                    <p>카테고리</p>
                </ProductCategory>
                <ProductPic>
                    <ProductPics {...settings}>
                        <MainPic>1</MainPic>
                        <MainPic>2</MainPic>
                    </ProductPics>
                    <ProductMainExplain>
                        <ProductInfos>
                            <ProductInfo>상품 정보</ProductInfo>
                            <ProductInformation>판매자:</ProductInformation>
                            <ProductInformation>상품 이름:</ProductInformation>
                            <ProductInformation>가격:</ProductInformation>
                            <ProductInformation>거래 지역:</ProductInformation>
                            <ProductTime>시간</ProductTime>
                        </ProductInfos>
                        <ButtonSection>
                            <LikeButton>
                                <LikeIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                 <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </LikeIcon>
                                <LikeNumber>0</LikeNumber>
                            </LikeButton>
                            <ChatButton>채팅하기</ChatButton>
                        </ButtonSection>
                    </ProductMainExplain>
                </ProductPic>
                <ProductSubExplain>
                    <ProductSubExplainTitle>상품 상세정보</ProductSubExplainTitle>
                    <ProductSubContent>오 사랑아 조금만 더 버텨주오 나는 너무나도 쉽게 사랑에 뛰어드는 마음이야 
                        아 그대야 조금만 더 버텨주오 나는 너무나도 쉽게 당신을 사랑했던 마음이야 아 그대야 왜 당신의 시선은 나의 테두리에 머물러 아 그대야 왜 당신의 소리는 사랑 하나 없이 몰려와 나를 슬프게 하나 사라지는 순간들을 한데 모아 감히 돌아갈 수 있는 순간을 내가 찾아갈 수 있게 해주오 사라지는 사람들을 한데 모아 감히 살아갈 수 있는 마음을 내가 찾아갈 수 있게 해주오</ProductSubContent>
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
border: 1px solid red;
display:flex;
flex-direction: column;`

const ProductCategory = styled.div`
width: 48.13rem;
border-bottom: 1px solid rgb(189,189,189);
height: 3rem;`

const ProductPic = styled.div`
width: 100%;
height: 30rem;
border: 1px solid orange;
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
border: 1px solid green;
width: 22.2rem;
height: 30rem;
margin: auto;
display:flex;
flex-direction: column;`

const ProductSubExplain = styled.div`
border: 1px solid green;
width: 100%;`

const ProductRecommend = styled.div`
width:100%;
border: 1px solid green;`

const MainPic = styled.div`
width: 20rem;
height: 20rem;
background-color: yellow;
// border: 1px solid blue;
// margin: 5rem auto 1rem;`

const SubPic = styled.div`
width: 4rem;
height: 4rem;
border: 1px solid blue;
margin: auto;`

const SubPicSection = styled.div`
display:flex;
flex-direction: row;
margin: auto;
width: 20rem;
border: 1px solid green;`

const ProductInfos = styled.div`
margin: 6rem 0 0.5rem;;
border: 1px solid blue;`

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
margin-right: 1.5rem;`

const ChatButton = styled.button`
width: 9rem;
height: 3.68rem;
font-size: 1.25rem;
background-color: rgb(242,17,17);
border: none;
color: white;`

const ButtonSection = styled.div`
display:flex;
flex-direction: row;
border: 1px solid blue;
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
margin-top: 2.5rem;`

const ProductSubContent = styled.p`
font-size: 1rem;
margin-bottom: 2.5rem;`

const ProductRecommendTitle = styled.p`
font-size: 1.2rem;
font-weight: 600;`

const ProductRecommendTitleSection = styled.div`
display:flex;
flex-direction: row;
margin-top: 2.5rem;`

const ProductRecommedNumber = styled.p`
margin-left: auto;
margin-top: 1.2rem;`

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