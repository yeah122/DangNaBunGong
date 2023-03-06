import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

function MyPageMenus() {

    const navigate = useNavigate();

    const goDeleteAccount= () => {
        navigate('/DeleteAccount')
    }
    const goSellProduct= () => {
        navigate('/SellProduct')
    }

    return(
        <MyPageMenu>
            <MyPageMenuText onClick={goSellProduct}>판매 내역</MyPageMenuText>
            <MyPageMenuText>구매 내역</MyPageMenuText>
            <MyPageMenuText>찜 목록</MyPageMenuText>
            <MyPageMenuText>거래후기</MyPageMenuText>
            <MyPageMenuText>내 정보</MyPageMenuText>
            <MyPageMenuText>고객센터</MyPageMenuText>
            <MyPageMenuText onClick={goDeleteAccount}>회원탈퇴</MyPageMenuText>
        </MyPageMenu>
    )
}

const MyPageMenu = styled.div`
width: 9.13rem;
height: 17.75rem;
border: 1px solid orange;
padding-top: 1rem;
display:flex;
flex-direction: column;`

const MyPageMenuText = styled.p`
font-size: 0.94rem;
margin: 0.5rem 0rem 0.5rem 2rem;
cursor: pointer;
width: 4.5rem;`

export default MyPageMenus;