import styled from "styled-components";

function Logo1() {
    return(
            <LogoOne>
                <LogoText1>당근나라</LogoText1>
                <LogoImg src='https://firebasestorage.googleapis.com/v0/b/carrot-a1349.appspot.com/o/logo.png?alt=media&token=81e933b8-ace6-45b8-8dee-0e9e60d2d4a8' alt='' />
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
`
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