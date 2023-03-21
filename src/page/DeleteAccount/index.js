import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import MyPageMenus from "../../components/MyPageMenus";
import MyProfile from "../../components/MyPageProfile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function DeleteAccount() {

    const navigate = useNavigate();

    const goMyPage = () => {
        navigate('/MyPage')
    }

    async function DeleteData () {
        try{
            const response = await axios.delete("",{
            });
            if(response.data.stateCode == 0){
                alert('정상적으로 탈퇴되었습니다.')
                navigate('/')
            }
            else if(response.data.stateCode == 209){
                alert('로그인 되어있지 않습니다.')
            }
            else if(response.data.stateCode == 210){
                alert('탈퇴에 실패하였습니다. 다시 시도해 주시기 바랍니다.')
            }
        }catch(error){}
    }

    return(
        <DeleteAccountPage>
            <MainHeader />
            <DeleteAccountSection>
                <MyProfile />
                <DeleteAccountMain>
                    <MyPageMenus />
                    <DeleteSection>
                        <DeleteTitle>회원탈퇴</DeleteTitle>
                        <DeleteWriteSection>
                            <DeleteWrite>
                                <DeleteWriteTitle>탈퇴사유</DeleteWriteTitle>
                                <DeleteWriteInput type='text'></DeleteWriteInput>
                            </DeleteWrite>
                            <DeleteWrite>
                                <DeleteWriteTitle>비밀번호</DeleteWriteTitle>
                                <DeleteWriteInput type='password'></DeleteWriteInput>
                            </DeleteWrite>
                        </DeleteWriteSection>
                        <DeleteBtnSection>
                            <DeleteBtn onClick={DeleteData}>탈퇴</DeleteBtn>
                            <DeleteCancle onClick={goMyPage}>취소</DeleteCancle>
                        </DeleteBtnSection>
                    </DeleteSection>
                </DeleteAccountMain>
            </DeleteAccountSection>
        </DeleteAccountPage>
    )
}

const DeleteAccountPage = styled.div`
display:flex;
flex-direction: column;`

const DeleteAccountSection = styled.div`
display:flex;
flex-direction: column;`

const DeleteAccountMain = styled.div`
display:flex;
flex-direction: row;
border: 1px solid red;
width: 48.13rem;
margin: auto;`

const DeleteSection = styled.div`
display:flex;
flex-direction: column;
border: 1px solid orange;
margin: 0rem auto;
width: 39rem;
height: 40rem;`

const DeleteTitle = styled.p`
font-size: 1.125rem;
font-weight: 600;
margin-left: 1.5rem;
margin-top: 2rem;`

const DeleteWriteSection = styled.div`
margin: 3rem auto;
border: 1px solid green;`

const DeleteWrite = styled.div`
display:flex;
flex-direction: row;
height: 1.5rem;
margin-bottom: 2rem;`

const DeleteWriteTitle = styled.p`
font-size: 1rem;
margin-right: 1rem;
line-height: 0rem;`

const DeleteWriteInput = styled.input`
width: 20rem;
height: 2rem;
border-radius: 5px;
padding: 0rem 0.5rem;
border: 1px solid rgb(189,189,189);`

const DeleteBtnSection = styled.div`
border: 1px solid green;
margin: auto;
margin-top:0rem;`

const DeleteBtn = styled.button`
width: 3rem;
height: 2rem;
border: none;
background-color: rgb(242,17,17);
color: white;
margin-right: 0.5rem;
cursor: pointer;`

const DeleteCancle = styled.button`
width: 3rem;
height: 2rem;
margin-left: 0.5rem;
border: 1px solid rgb(189,189,189);
background-color: white;
cursor: pointer;`

export default DeleteAccount;