import styled from "styled-components";
import MainHeader from "../../components/MainHeader";

function Notice() {
    return(
        <NoticePage>
            <MainHeader />
            <NoticeSection>
                <NoticeTitle>
                    <p>공지사항</p>
                </NoticeTitle>
                <NoticeMain>
                    <NoticeContent>
                        <NoticeNumber>1.</NoticeNumber>
                        <NoticeName>승훈이는 종강하고 싶어</NoticeName>
                        <NoticeTime>2023.05.20</NoticeTime>
                    </NoticeContent>
                </NoticeMain>
            </NoticeSection>
        </NoticePage>
    )
}

const NoticePage = styled.div`
display:flex;
flex-direction : column;`

const NoticeSection = styled.div`
margin: auto;
margin-top: 10rem;
display:flex;
flex-direction: column;
width: 48.13rem;
border-top: 1px solid rgb(189,189,189);`

const NoticeTitle = styled.div`
height: 5rem;
padding-left: 1.5rem;
border: 1px solid red;
font-size: 1.3rem;
font-weight: 600;`

const NoticeMain = styled.div`
border: 1px solid orange;
display:flex;
flex-direction : column;`

const NoticeContent = styled.div`
padding-left: 1.5rem;
padding-right: 1.5rem;
height: 3rem;
border: 1px solid yellow;
display:flex;
flex-direction : row;
border-bottom: 1px solid rgb(189,189,189);`

const NoticeNumber = styled.p`
font-weight: 500;`

const NoticeName = styled.p`
margin-left: 1rem;
border : 1px solid green;
width: 38rem;
height: 1.3rem;
font-weight: 500;`

const NoticeTime = styled.p`
font-weight: 500;`

export default Notice;