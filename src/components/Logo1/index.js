import styled from "styled-components";
import {useNavigate} from "react-router-dom";

function Logo1() {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    }


    return(
            <LogoOne onClick={goHome}>
                <LogoText1>당근나라</LogoText1>
                <LogoImg src='https://firebasestorage.googleapis.com/v0/b/dang-na-bun-gong.appspot.com/o/logo.png?alt=media&token=23ef5ad3-c197-4512-84da-8d665d88c942' alt='' />
                <LogoText1>번개공주</LogoText1>
            </LogoOne>
    )
}

const LogoOne = styled.div`
display:flex;
flex-direction: row;
margin: auto;
margin-top: 0.5rem;
justify-content: center;
cursor: pointer;`

const LogoText1 = styled.p`
font-size : 1.5rem;
font-weight: 800;
color: rgb(242,17,17);
`
const LogoImg = styled.img`
width: 2.84rem;
height: 5.3rem;
margin: 0rem 0.5rem`

export default Logo1