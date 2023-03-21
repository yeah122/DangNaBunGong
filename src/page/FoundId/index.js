import styled from "styled-components";
import Logo1 from "../../components/Logo1";
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import axios from "axios";

function FoundId() {

    const navigate = useNavigate();

    const goFoundPw = () => {
        navigate('/FoundPw');
    }
    const goSignUp = () => {
        navigate('/SignUp');
    }
    const goLogin = () => {
        navigate('/Login');
    }

    const [Name, setName] = useState(" ");
    const [Tel, setTel] = useState(" ");

    const onTelHandler = (event) => {
        setTel(event.currentTarget.value);
    };

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    };

    async function foundIdData() {
        try{
            const response = await axios.get("", {
                membername:Name,
                membertel:Tel,
            });
            if(response.data.stateCode == 0) {
                navigate("/Login")
                localStorage.setItem('Id', response.data.data);
                alert("아이디 찾기에 성공했습니다. 아이디는 localStorage.getItem('Id')입니다.")
            }
            else if(response.data.stateCode == 101 ) {
                alert("정보를 모두 입력해주세요.")
            }
            else if(response.data.stateCode == 203 ) {
                alert("유효하지 않은 전화번호 입니다.")
            }
            else if(response.data.stateCode == 207 ) {
                alert("일치하는 회원 정보가 없습니다.")
            }
        }catch(error){}
    }

    return(
        <FoundIdArea>
        <FoundIdPage>
            <Logo1 />
            <FoundIdSection>
                <FoundIdTitle>아이디 찾기</FoundIdTitle>
                <FoundIdInput>
                    <FoundIdName onChange={onNameHandler} type='text' placeholder="이름" />
                    <FoundIdNumberSection>
                    <FoundIdCallNumber onChange={onTelHandler} type='text' placeholder='전화번호' />
                    <FoundIdCallNumberButton>인증받기</FoundIdCallNumberButton>
                    </FoundIdNumberSection>
                    <FoundIdVerificationCode type="text" placeholder="인증번호" />
                </FoundIdInput>
                <FoundIdBtnSection>
                    <FoundIdBtn onClick={foundIdData}>아이디 찾기</FoundIdBtn>
                </FoundIdBtnSection>
                <FoundIdOptionSection>
                    <FoundIdOption onClick={goLogin}>로그인</FoundIdOption>
                    <FoundIdOption onClick={goFoundPw}>비밀번호 찾기</FoundIdOption>
                    <FoundIdOption onClick={goSignUp}>회원가입</FoundIdOption>
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
margin: 0.5rem 0.5rem;
cursor: pointer;`

export default FoundId;