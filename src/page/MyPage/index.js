import styled from "styled-components";
import MainHeader from "../../components/MainHeader";

function MyPage() {
    return(
        <MyPageSection>
            <MainHeader />
            <MyPageProfile></MyPageProfile>
            <MyPageMain>
                <MyPageMenu></MyPageMenu>
                <MyPageContent>
                    <MyProduct></MyProduct>
                    <MyProduct></MyProduct>
                    <MyProduct></MyProduct>
                    <MyReview></MyReview>
                </MyPageContent>
            </MyPageMain>
        </MyPageSection>
    )
}

const MyPageSection = styled.div`
display:flex;
flex-direction: column;`

const MyPageProfile = styled.div`
border: 1px solid red;
width: 48.13rem;
height: 17.5rem;
margin: auto;
margin-top: 10rem;
display:flex;
flex-direction: row;`

const MyPageMain = styled.div`
border:1px solid red;
width: 48.13rem;
margin: auto;
display:flex;
flex-direction: row;`

const MyPageMenu = styled.div`
width: 9.13rem;
height: 18.75rem;
border: 1px solid orange;
display:flex;
flex-direction: column;`

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
flex-direction: row;`

const MyReview = styled.div`
width: 100%;
border : 1px solid green;
display:flex;
flex-direction: row;`

export default MyPage;