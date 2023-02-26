import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import MyPageMenus from "../../components/MyPageMenus";
import MyProfile from "../../components/MyPageProfile";

function MyPage() {
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
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                        </MyProductSection>
                    </MyProduct>
                    <MyProduct>
                        <MyProductTitle>구매 내역</MyProductTitle>
                        <MyProductSection>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                        </MyProductSection>
                    </MyProduct>
                    <MyProduct>
                        <MyProductTitle>찜 목록</MyProductTitle>
                        <MyProductSection>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                            <MyProductPic></MyProductPic>
                        </MyProductSection>
                    </MyProduct>
                    <MyReview>
                        <MyProductTitle>거래 후기</MyProductTitle>
                    </MyReview>
                </MyPageContent>
            </MyPageMain>
        </MyPageSection>
    )
}

const MyPageSection = styled.div`
display:flex;
flex-direction: column;`

const MyPageMain = styled.div`
border:1px solid red;
width: 48.13rem;
margin: auto;
display:flex;
flex-direction: row;`

const MyPageContent = styled.div`
width: 39rem;
border: 1px solid orange;
display:flex;
flex-direction: column;`

const MyProduct = styled.div`
height: 14.375rem;
width: 100%;
border: 1px solid green;
display:flex;
flex-direction: column;`

const MyProductTitle = styled.p`
font-size: 0.84rem;
font-weight: 600;
margin-left: 1rem;
margin-top: 1.5rem;`

const MyProductSection = styled.div`
border: 1px solid blue;
height: 8.125rem;
margin: 1rem 1rem 0rem 1rem;
display:flex;
flex-direction: row;`

const MyProductPic = styled.div`
border: 1px solid purple;
width: 6rem;
height: 6rem;
margin: 1rem 1.5rem auto 0rem;`

const MyReview = styled.div`
width: 100%;
border : 1px solid green;
display:flex;
flex-direction: row;`

export default MyPage;