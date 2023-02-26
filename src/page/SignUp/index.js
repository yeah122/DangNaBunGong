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

    const [Check, setCheck] = useState("");

    const CheckHandlerButton = (e) => {
    setCheck(e.target.value)
    console.log(e.target.value)
  }

    const [Password, setPassword] = useState(" ");
    const [ConfirmPassword, setConfirmPassword] = useState(" ");
    const [Id, setId] = useState(" ");
    const [Name, setName] = useState(" ");
    const [Tel, setTel] = useState(" ");
    const [Mail, setMail] = useState(" ");
    const [Gender, setGender] = useState(" ");
    const [Birth, setBirth] = useState(" ");
    const [Region, setRegion] = useState(" ");

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
    const onGenderHandler = (event) => {
        setGender(event.currentTarget.value);
    };
    const onBirthHandler = (event) => {
        setBirth(event.currentTarget.value);
    };
    const onRegionHandler = (event) => {
        setRegion(event.currentTarget.value);
    };

     async function postData() {
         try{
             const response = await axios.post("", {
                 memberid:Id,
                 memberpw:Password,
                 membername:Name,
                 membertel:Tel,
                 memberemail:Mail,
                 membergender:Gender,
                 memberbirth: Birth,
                 memberregion : Region
             });
             if(response.data.stateCode == 0) {
                 navigate("/")
                 alert("가입이 완료되었습니다.")
             }
             else if(response.data.stateCode == 300 ) {
                 alert("가입에 실패했습니다. 재시도 해주십시오.")
             }
             else if(response.data.stateCode == 101 ) {
                 alert("필수 정보를 모두 입력해주세요.")
             }
             else if(response.data.stateCode == 190 ) {
                 alert("데이터베이스 연결에 실패했습니다.")
             }
             else if(response.data.stateCode == 202 ) {
                 alert("비밀번호 양식이 잘못되었습니다.")
             }
             else if(response.data.stateCode == 203 ) {
                 alert("전화번호 양식이 잘못되었습니다.")
             }
             else if(response.data.stateCode == 204 ) {
                 alert("이미 사용 중인 전화번호입니다.")
             }
             else if(response.data.stateCode == 205 ) {
                 alert("메일 양식이 잘못되었습니다.")
             }
             else if(response.data.stateCode == 206 ) {
                 alert("이미 사용 중인 이메일입니다.")
             }
             else if(response.data.stateCode == 209 ) {
                 alert("아이디 중복 확인이 필요합니다.")
             }
             else if(Password !== ConfirmPassword){
                 return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
             }
             else if(Check == false){
                 alert('이용약관에 동의해주십시오.')
            } 
         }catch(error){}
        }

    async function overlapData() {
        try{
            const response = await axios.get("", {
                memberid:Id,
            });
            if(response.data.stateCode == 0) {
                alert("사용 가능한 아이디입니다.")
            }
            else if(response.data.stateCode == 201) {
                alert("중복 된 아이디입니다.")
            }
        }catch(error){}
    }


    return(
        <SignUpMain>
            <Logo1 onClick={goHome} />
            <SignUpInfo>필수 정보</SignUpInfo>
            <SignUpArea>
                <SignUpText>아이디</SignUpText>
                <MakeId type='text' placeholder="영문, 숫자 5~10자" value={Id} onChange={onIdHandler}></MakeId>
                <CheckBtn onClick = {overlapData}>중복 확인</CheckBtn>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>비밀번호</SignUpText>
                <MakePw type='password'  onChange={onPasswordHandler} value={Password} placeholder="영문, 숫자, 특수문자 조합 최소 8자"></MakePw>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>비밀번호 확인</SignUpText>
                <MakePw type='password' onChange={onConfirmPasswordHandler} value={ConfirmPassword} placeholder="비밀번호 확인"></MakePw>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>이름</SignUpText>
                <MakePw type='text' placeholder="" value={Name} onChange={onNameHandler}></MakePw>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>거주지역</SignUpText>
                <SelectAdress onChange={onRegionHandler} value={Region} type='select'>
                    <option value="1">시/도</option>
                </SelectAdress>
                <SelectAdress onChange={onRegionHandler} value={Region} type='select'>
                    <option value="1">시/구</option>
                </SelectAdress>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>전화번호</SignUpText>
                <MakeId type='tel' placeholder="" value={Tel} onChange={onTelHandler}></MakeId>
                <CheckBtn>인증 받기</CheckBtn>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>이메일</SignUpText>
                <MakeId type='email' placeholder="" value={Mail} onChange={onMailHandler}></MakeId>
                <CheckBtn>인증 받기</CheckBtn>
            </SignUpArea>
            <SignUpInfo>추가 정보</SignUpInfo>
            <SignUpArea>
                <SignUpText>성별</SignUpText>
                <ChooseSexSection>
                        <input type="radio" onChange={onGenderHandler} name="sex" value="남성" /><ChooseSex id="man">남</ChooseSex>
                        <input type="radio" onChange={onGenderHandler} name="sex" value="여성" /><ChooseSex id="girl">여</ChooseSex>
                </ChooseSexSection>
            </SignUpArea>
            <SignUpArea>
                <SignUpText>생년월일</SignUpText>
                <ChooseBirthDay onChange={onBirthHandler} value={Birth} type="date" />
            </SignUpArea>
            <TOSArea>
            <SignUpText>이용약관</SignUpText>
            <TOS />
            <TOSAccept>
            <input onClick={CheckHandlerButton} type='checkbox' value="Check"/>이용약관에 동의합니다.
            </TOSAccept>
        </TOSArea>
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
margin: 1rem auto;`

const SignUpInfo = styled.p`
font-size: 1rem;
font-weight: 600;`

const SignUpText = styled.p`
font-size: 0.75rem;
font-weight: 600;
margin-bottom : 0.5rem;`

const SelectAdress = styled.select`
width: 6rem;
height: 2rem;
margin-right: 1rem;`

const MakeId = styled.input`
width: 14.25rem;
height: 2.625rem;
border: 1px solid rgb(189,189,189);
border-radius : 5px;
padding-left: 0.5rem;
`

const ChooseSexSection = styled.div`
display:flex;
flex-direction: row;
height: 1.6rem;
line-height: 0rem;
margin-bottom: 1.5rem;`

const ChooseSex = styled.p`
margin-right: 1rem;
margin-left: 0.2rem;`

const ChooseBirthDay = styled.input`
width: 9rem;
height: 2rem;
margin-bottom: 1rem;`

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
cursor: pointer;
margin-bottom: 3rem;`

const TOSArea = styled.div`
height: 15rem;
`

const TOSAccept = styled.div`
margin-top: 0.7rem;
font-size: 0.75rem;`

export default SignUp;