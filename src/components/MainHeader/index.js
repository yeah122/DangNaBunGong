import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

function MainHeader() {

    const navigate = useNavigate();

    const goSignUp =() => {
        navigate('/SignUp')
    }
    const goSellPage =() => {
        navigate('/SellPage')
    }

    return(
        <Headers>
            <Header>
                <LoginSection>
                    <LoginText>로그인</LoginText>
                    <LoginText> / </LoginText>
                    <LoginText onClick={goSignUp}>회원가입</LoginText>
                </LoginSection>
                <HeaderMain>
                    <HeaderLogo>
                        <Img src="https://firebasestorage.googleapis.com/v0/b/dang-na-bun-gong.appspot.com/o/logo.png?alt=media&token=23ef5ad3-c197-4512-84da-8d665d88c942"></Img>
                        <HeaderLogoTexts>
                            <HeaderLogoText>당근나라</HeaderLogoText>
                            <HeaderLogoText>번개공주</HeaderLogoText>
                        </HeaderLogoTexts>
                    </HeaderLogo>
                    <SearchBarSection>
                        <SearchBar type='search'></SearchBar>
                        <SearchIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </SearchIcon>
                    </SearchBarSection>
                    <Menus>
                        <Menu onClick={goSellPage}>
                            <MenuIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </MenuIcon>
                            <MenuText>판매하기</MenuText>
                        </Menu>
                        <Menu>
                            <MenuIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </MenuIcon>
                            <MenuText>채팅</MenuText>
                        </Menu>
                        <MyMenu>
                            <MenuIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </MenuIcon>
                            <MenuText>마이페이지</MenuText>
                        </MyMenu>
                    </Menus>
                </HeaderMain>
            </Header>
        </Headers>
    )
}

const Headers = styled.div`
display:flex;
flex-direction: column;
width: 100%;
position:fixed;
`

const Header = styled.div`
display:flex;
flex-direction: column;
width: 49.13rem;
margin: auto;
background-color: white;
`

const LoginSection = styled.div`
display:flex;
flex-direction: row;
margin-left: auto;
height: 2rem;`

const LoginText = styled.p`
font-size: 0.75rem;
margin-left: 0.3rem;
cursor:pointer;`

const HeaderMain = styled.div`
display:flex;
flex-direction: row;
margin-top: 1.5rem;`

const HeaderLogo = styled.div`
display:flex;
flex-direction: row;
width: 10.5rem;
height: 5.06rem;
justify-content: center;`

const Img = styled.img`
width: 3.06rem;
height: 4.5rem;
margin: auto;`

const HeaderLogoTexts = styled.div`
line-height: 1.8rem;
margin:auto 0 auto 0.15rem;
height: 3.5rem;
cursor: pointer;`

const HeaderLogoText = styled.p`
margin: 0rem;
font-size: 1.5rem;
color: rgb(242,17,17);
font-weight: 900;`

const SearchBarSection = styled.div`
width: 21.75rem;
height: 5.06rem;
margin-left: 2rem;
display:flex;
flex-direction: row;
`

const SearchBar = styled.input`
border: 3px solid rgb(242,17,17);
width: 21.75rem;
height: 2.5rem;
margin: auto;
padding-left: 0.5rem;
padding-right: 2rem;
position:relative;`

const SearchIcon = styled.svg`
color : rgb(242,17,17);
width: 1.5rem;
height: 1.5rem;
position: absolute;
margin: 1.75rem 0rem auto 19.75rem;
cursor:pointer;`

const Menus = styled.div`
display :flex;
flex-direction: row;
`

const Menu = styled.div`
width: 2.81rem;
height: 3.44rem;
margin: auto;
margin-left: 1.5rem;
display:flex;
justfy-content: center;
flex-direction: column;`

const MenuIcon = styled.svg`
margin: auto;
width: 2.06rem;
height: 2.31rem;`

const MenuText = styled.p`
font-size: 0.5rem;
font-weight: 800;
margin : auto;`

const MyMenu = styled.div`
width: 3.2rem;
height: 3.44rem;
margin: auto;
margin-left: 1rem;
display:flex;
justfy-content: center;
flex-direction: column; `

export default MainHeader;