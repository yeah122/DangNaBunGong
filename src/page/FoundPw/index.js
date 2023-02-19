import styled from "styled-components";
import Logo1 from "../../components/Logo1";

function FoundPw() {
    return(
        <FoundPwArea>
        <FoundPwPage>
            <Logo1 />
            <FoundPwSection>
                <FoundPwTitle>비밀번호 찾기</FoundPwTitle>
                <FoundPwInput>
                    <FoundPwName type='text' placeholder="이름" />
                    <FoundPwName type='text' placeholder="아이디" />
                    <FoundPwNumberSection>
                    <FoundPwCallNumber type='text' placeholder='전화번호' />
                    <FoundPwCallNumberButton>인증받기</FoundPwCallNumberButton>
                    </FoundPwNumberSection>
                    <FoundPwVerificationCode type="text" placeholder="인증번호" />
                </FoundPwInput>
                <FoundPwBtnSection>
                    <FoundPwBtn>비밀번호 찾기</FoundPwBtn>
                </FoundPwBtnSection>
                <FoundPwOptionSection>
                    <FoundPwOption>로그인</FoundPwOption>
                    <FoundPwOption>아이디 찾기</FoundPwOption>
                    <FoundPwOption>회원가입</FoundPwOption>
                </FoundPwOptionSection>
            </FoundPwSection>
        </FoundPwPage>
        </FoundPwArea>
    )
}

const FoundPwArea = styled.div`
display:flex;
flex-direction: column;
justify-content: center;`

const FoundPwPage = styled.div`
width: 25rem;
height: 30rem;
margin: auto;
margin-top: 12rem;`

const FoundPwSection = styled.div`
display: flex;
flex-direction: column;
justiry-content: center;
margin-top: 1rem;`

const FoundPwTitle = styled.p`
font-size: 1.25rem;
font-weight: 800;
margin: auto;`

const FoundPwInput = styled.div`
width: 19.5rem;
margin: 1.5rem auto 0rem;`

const FoundPwName = styled.input`
width: 18.25rem;
height: 1.6875rem;
padding: 0.5rem;
border: 1px solid rgb(189,189,189);
border-radius : 5px;
margin-bottom: 1rem;`

const FoundPwNumberSection = styled.div`
display:flex;
flex-direction: row;
margin-bottom: 1rem;`

const FoundPwCallNumber = styled.input`
width: 13.25rem;
height: 1.6875rem;
padding: 0.5rem;
border: 1px solid rgb(189,189,189);
border-radius: 5px;`

const FoundPwCallNumberButton = styled.button`
width: 4.5rem;
height: 2.6875rem;
border: none;
border-radius: 5px;
margin-left: 0.5rem;
background-color: rgb(217,217,217);
font-size: 0.74rem;`

const FoundPwVerificationCode = styled.input`
width: 18.25rem;
height: 1.6875rem;
padding: 0.5rem;
border: 1px solid rgb(189,189,189);
border-radius: 5px;
margin-bottom: 1rem;`

const FoundPwBtnSection = styled.div`
display:flex;
justify-content: center;`

const FoundPwBtn = styled.button`
margin: 0.5rem auto 0.5rem;
border: none;
border-radius:5px;
font-size: 1rem;
font-weight: 600;
width: 16.25rem;
height: 2.5rem;
color: white;
background-color:rgb(242,17,17);`

const FoundPwOptionSection = styled.div`
display:flex;
flex-direction: row;
justify-content: center;`

const FoundPwOption = styled.p`
font-size: 0.74rem;
margin: 0.5rem 0.5rem;`

export default FoundPw;