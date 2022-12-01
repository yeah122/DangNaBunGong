import styled from "styled-components";

function Main() {
    return(
        <MainPage>
            <MainHeader>
                <HeaderContents>
                    <div style={{width:'2.5vw', height:'100%', border:'1px solid blue'}}></div>
                    <LogoTexts>
                        <LogoText>당근나라</LogoText>
                        <LogoText>번개공주</LogoText>
                    </LogoTexts>
                    <div style={{border:'1px solid blue', height:'100%', margin:'auto 0vw auto 2.5vw', display:'flex'}}>
                        <Search></Search>
                        <SearchBtn>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" color="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        </SearchBtn>
                    </div>
                </HeaderContents>
            </MainHeader>
            <div>
            </div>
        </MainPage>
    )
}

const MainPage = styled.div`
border: 1px solid red;
width: 55vw;
margin: auto;
`

const MainHeader = styled.div`
border: 1px solid orange;
width: 55vw;
height: 8vw;
margin-top: 4vw;
display:flex;
flex-direction: row;
`
const HeaderContents= styled.div`
border: 1px solid green;
margin: auto;
width: 45vw;
display: flex;
flex-direction: row;`


const LogoTexts = styled.div`
width: 7vw;
height: 5vw;
border: 1px solid blue;
display: flex;
flex-direction: column;
line-height: 2.5vw;
padding: auto;
`
const LogoText = styled.p`
margin: 0vw;
font-weight: 600;
font-size: 1.8rem;
color: rgb(226, 75, 0);
`
const Search = styled.input`
width: 29vw;
height: 3.5vw;
margin: auto;
border: 1px solid rgb(146,146,146);
font-size: 1.3rem;
font-weight: 400;
&:focus{
    outline: 1px solid rgb(38,38,38);
}`

const SearchBtn = styled.button`
width: 3.5vw;
height: 3.75vw;
border: 1px solid rgb(226, 75, 0);
background-color: rgb(226,75,0);
cursor: pointer;`

export default Main;