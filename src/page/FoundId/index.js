import styled from "styled-components";
import Logo1 from "../../components/Logo1";

function FoundId() {
    return(
        <FoundIdArea>
        <FoundIdPage>
            <Logo1 />
            <FoundIdSection>
                <FoundIdTitle>아이디 찾기</FoundIdTitle>
                <FoundIdInput>
                    <FoundIdName type='text' placeholder="이름" />
                    <FoundIdNumberSection>
                    <FoundIdCallNumber type='text' placeholder='전화번호' />
                    <FoundIdCallNumberButton>인증받기</FoundIdCallNumberButton>
                    </FoundIdNumberSection>
                    <FoundIdVerificationCode type="text" placeholder="인증번호" />
                </FoundIdInput>
                <FoundIdBtnSection>
                    <FoundIdBtn>아이디 찾기</FoundIdBtn>
                </FoundIdBtnSection>
                <FoundIdOptionSection>
                    <FoundIdOption>로그인</FoundIdOption>
                    <FoundIdOption>비밀번호 찾기</FoundIdOption>
                    <FoundIdOption>회원가입</FoundIdOption>
                </FoundIdOptionSection>
            </FoundIdSection>
        </FoundIdPage>
        </FoundIdArea>
    )
}

const FoundIdArea = styled.div`
display:flex;
flex-direction: column;
justify-content: center;`

const FoundIdPage = styled.div`
width: 25rem;
height: 30rem;
margin: auto;
margin-top: 14rem;`

const FoundIdSection = styled.div`
display: flex;
flex-direction: column;
justiry-content: center;
margin-top: 1rem;`

const FoundIdTitle = styled.p`
font-size: 1.25rem;
font-weight: 800;
margin: auto;`

const FoundIdInput = styled.div`
margin: 1.5rem auto 0rem;`

const FoundIdName = styled.input`
width: 18.25rem;
height: 1.6875rem;
padding: 0.5rem;
border: 1px solid rgb(189,189,189);
border-radius : 5px;
margin-bottom: 1rem;`

const FoundIdNumberSection = styled.div`
display:flex;
flex-direction: row;
margin-bottom: 1rem;`

const FoundIdCallNumber = styled.input`
width: 13.25rem;
height: 1.6875rem;
padding: 0.5rem;
border: 1px solid rgb(189,189,189);
border-radius: 5px;`

const FoundIdCallNumberButton = styled.button`
width: 4.5rem;
height: 2.6875rem;
border: none;
border-radius: 5px;
margin-left: 0.5rem;
background-color: rgb(217,217,217);
font-size: 0.74rem;`

const FoundIdVerificationCode = styled.input`
width: 18.25rem;
height: 1.6875rem;
padding: 0.5rem;
border: 1px solid rgb(189,189,189);
border-radius: 5px;
margin-bottom: 1rem;`

const FoundIdBtnSection = styled.div`
display:flex;
justify-content: center;`

const FoundIdBtn = styled.button`
margin: 0.5rem auto 0.5rem;
border: none;
border-radius:5px;
font-size: 1rem;
font-weight: 600;
width: 16.25rem;
height: 2.5rem;
color: white;
background-color:rgb(242,17,17);`

const FoundIdOptionSection = styled.div`
display:flex;
flex-direction: row;
justify-content: center;`

const FoundIdOption = styled.p`
font-size: 0.74rem;
margin: 0.5rem 0.5rem;`

export default FoundId;