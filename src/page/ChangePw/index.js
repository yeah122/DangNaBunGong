import styled from "styled-components";
import Logo1 from "../../components/Logo1";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function ChangePw() {

    const navigate = useNavigate();

    const goFoundId=() => {
        navigate('/FoundId')
    }
    const goSignUp=() => {
        navigate('/SignUp')
    }

    const [NewPw, setNewPw] = useState('');
    const [ConfirmNewPw, setConfirmNewPw] = useState('');

    const onNewPwHandler = (e) => {
        setNewPw(e.currentTarget.value)
    }
    const onConfirmNewPwHandler = (e) => {
        setConfirmNewPw(e.currentTarget.value)
    }

    const postNewPw = () =>{
        if(NewPw !== ConfirmNewPw) {
            alert ('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }
        else if (NewPw == '' && ConfirmNewPw == '') {
            alert ('비밀번호를 입력해주세요.')
        }
        else if (NewPw == ConfirmNewPw) {
            alert ('비밀번호가 변경되었습니다.')
            navigate ('/로그인')
        }
    }

    return(
        <FoundPwArea>
        <FoundPwPage>
            <Logo1 />
            <FoundPwSection>
                <FoundPwTitle>비밀번호 변경</FoundPwTitle>
                <FoundPwInput>
                    <FoundPwName onChange={onNewPwHandler} type='text' value={NewPw} placeholder="영문, 숫자, 특수문자 조합 최소 8자" />
                    <FoundPwName onChange={onConfirmNewPwHandler} type='text' value={ConfirmNewPw} placeholder="비밀번호 재확인" />
                </FoundPwInput>
                <FoundPwBtnSection>
                    <FoundPwBtn onClick={postNewPw}>비밀번호 변경</FoundPwBtn>
                </FoundPwBtnSection>
                <FoundPwOptionSection>
                    <FoundPwOption>로그인</FoundPwOption>
                    <FoundPwOption onClick={goFoundId}>아이디 찾기</FoundPwOption>
                    <FoundPwOption onClick={goSignUp}>회원가입</FoundPwOption>
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
margin: 0.5rem 0.5rem;
cursor: pointer;`

export default ChangePw;