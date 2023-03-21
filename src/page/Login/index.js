import styled from "styled-components";
import Logo1 from "../../components/Logo1";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {

    const navigate = useNavigate();

    const goFoundId =() => {
        navigate('/FoundId')
    }
    const goFoundPw= () => {
        navigate('/FoundPw')
    }
    const goSignUp=()=> {
        navigate('/SignUp')
    }

    const [Id,setId] = useState(" ");
    const [Pw,setPw] = useState(" ");

    const onPasswordHandler = (event) => {
        setPw(event.currentTarget.value);
    };
    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    async function LoginData() {
        try{
            const response = await axios.post("",{
                memberid:Id,
                memberpw:Pw,
            });
            console.log(response);
            localStorage.setItem('memberId', Id);
            if(response.data.stateCode == 0){
                navigate('/MainHeader')
            }
            else if(response.data.stateCode == 207){
                alert("아이디가 존재하지 않습니다.")
            }
            else if(response.data.stateCode == 208){
                alert("아이디나 비밀번호가 잘못되었습니다.")
            }
            else if(response.data.stateCode == 209){
                alert("회원정보가 잘못되었습니다.")
            }
        }catch(error){}
    }


    return(
        <LoginArea>
        <LoginPage>
            <Logo1 />
            <LoginSection>
                <LoginTitle>로그인</LoginTitle>
                <LoginInput>
                    <LoginName onChange={onIdHandler} type='text' placeholder="아이디" />
                    <LoginName onChange={onPasswordHandler} type='password' placeholder="비밀번호" />
                </LoginInput>
                <LoginBtnSection>
                    <LoginBtn onClick={LoginData}>로그인</LoginBtn>
                </LoginBtnSection>
                <LoginOptionSection>
                    <LoginOption onClick={goFoundId}>아이디 찾기</LoginOption>
                    <LoginOption onClick={goFoundPw}>비밀번호 찾기</LoginOption>
                    <LoginOption onClick={goSignUp}>회원가입</LoginOption>
                </LoginOptionSection>
                <SocialLogin>카카오 로그인</SocialLogin>
            </LoginSection>
        </LoginPage>
        </LoginArea>
    )
}

const LoginArea = styled.div`
display:flex;
flex-direction: column;
justify-content: center;`

const LoginPage = styled.div`
width: 25rem;
height: 30rem;
margin: auto;
margin-top: 12rem;`

const LoginSection = styled.div`
display: flex;
flex-direction: column;
justiry-content: center;
margin-top: 1rem;`

const LoginTitle = styled.p`
font-size: 1.25rem;
font-weight: 800;
margin: auto;`

const LoginInput = styled.div`
width: 19.5rem;
margin: 1.5rem auto 0rem;`

const LoginName = styled.input`
width: 18.25rem;
height: 1.6875rem;
padding: 0.5rem;
border: 1px solid rgb(189,189,189);
border-radius : 5px;
margin-bottom: 1rem;`

const LoginBtnSection = styled.div`
display:flex;
justify-content: center;`

const LoginBtn = styled.button`
margin: 0.5rem auto 0.5rem;
border: none;
border-radius:5px;
font-size: 1rem;
font-weight: 600;
width: 16.25rem;
height: 2.5rem;
color: white;
background-color:rgb(242,17,17);`

const SocialLogin = styled.button`
margin: 1.5rem auto;
border: none;
border-radius:5px;
font-size: 1rem;
font-weight: 600;
width: 16.25rem;
height: 2.5rem;
color: black;
background-color:yellow;`

const LoginOptionSection = styled.div`
display:flex;
flex-direction: row;
justify-content: center;`

const LoginOption = styled.p`
font-size: 0.74rem;
margin: 0.5rem 0.5rem;
cursor: pointer;`

export default Login;