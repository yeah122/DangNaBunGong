import styled from "styled-components";
import Logo1 from "../../components/Logo1";
import TOS from "../../components/TOS";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";

function SignUp() {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/')
    }


    const [Password, setPassword] = useState(" ");
    const [ConfirmPassword, setConfirmPassword] = useState(" ");
    const [Id, setId] = useState(" ");
    const [Name, setName] = useState(" ");
    const [Tel, setTel] = useState(" ");
    const [Mail, setMail] = useState(" ");

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    };

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    const onTelHandler = (event) => {
        setTel(event.currentTarget.value);
    };

    const onMailHandler = (event) => {
        setMail(event.currentTarget.value);
    };

    async function postData() {
        try{
            const response = await axios.post("", {
                memberid:Id,
                memberpw:Password,
                membername:Name,
                membertel:Tel,
                memberemail:Mail,
            });
            if(response.data.code == 0) {
                navigate()
                alert("가입이 완료되었습니다.")
            }
            else if(response.data.code ) {}
            else if(Password !== ConfirmPassword){
                return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
            }
        }catch(error){}
    }


    return(
        <SignUpMain>
            <Logo1 onClick={goHome} />
            <SignUpArea>
                <SignUpText>아이디</SignUpText>
                <MakeId type='text' placeholder="영문, 숫자 5~10자" onChange={onIdHandler}></MakeId>
                <CheckBtn>중복 확인</CheckBtn>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>비밀번호</SignUpText>
                <MakePw type='password'  onChange={onPasswordHandler} placeholder="영문, 숫자, 특수문자 조합 최소 8자"></MakePw>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>비밀번호 확인</SignUpText>
                <MakePw type='password' onChange={onConfirmPasswordHandler} placeholder="비밀번호 확인"></MakePw>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>이름</SignUpText>
                <MakePw type='text' placeholder="" onChange={onNameHandler}></MakePw>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>전화번호</SignUpText>
                <MakeId type='tel' placeholder="" onChange={onTelHandler}></MakeId>
                <CheckBtn>인증 받기</CheckBtn>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>이메일</SignUpText>
                <MakeId type='email' placeholder="" onChange={onMailHandler}></MakeId>
                <CheckBtn>인증 받기</CheckBtn>
            </SignUpArea>
            <TOS />
            <SignUpBtnArea>
                <SignUpBtn type='submit' onClick={postData}>가입하기</SignUpBtn>
            </SignUpBtnArea>
        </SignUpMain>
    )
}

const SignUpMain = styled.div`
width: 315px;
margin: auto;
justify-content : center;
align-items: center;`

const SignUpArea = styled.div`
`

const SignUpText = styled.p`
font-size: 0.75rem;
font-weight: 600;
margin-bottom : 0.5rem;`

const MakeId = styled.input`
width: 14.25rem;
height: 2.625rem;
border: 1px solid rgb(189,189,189);
border-radius : 5px;
padding-left: 0.5rem;
`

const CheckBtn = styled.button`
width: 3.94rem;
height: 2.63rem;
border: none;
border-radius : 5px;
background-color: rgb(217,217,217);
margin-left: 0.5rem;
font-size: 0.72rem;
color: white;
cursor: pointer;
`

const MakePw = styled.input`
width: 18.75rem;
height: 2.63rem;
border: 1px solid rgb(189,189,189);
border-radius : 5px;
padding-left: 0.5rem;
`

const SignUpBtnArea = styled.div`
margin: 1rem auto 0rem;
display:flex;
justify-content: center;`

const SignUpBtn = styled.button`
margin : auto;
border: none;
background-color: rgb(242,17,17);
color: white;
width: 18.625rem;
height: 3.812rem;
border-radius: 5px;
font-size: 1.38rem;
font-weight: 500;
cursor: pointer;`

export default SignUp;