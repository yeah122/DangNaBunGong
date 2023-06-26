import styled from "styled-components"
import MainHeader from "../../components/MainHeader";
import Footer from "../../components/MainFooter/Footer";

function Chat() {
    return(
        <ChatPage>
            <MainHeader />
            <ChatSection>
                <ChatList>
                    <ChatListText>채팅 목록</ChatListText>
                    <ChatListSection>
                        <ChatListContent>
                            <ChatProfileImg></ChatProfileImg>
                            <ChatProfile>
                                <ChatProfileNickName>닉네임</ChatProfileNickName>
                                <ChatProfileContent>채팅 내용</ChatProfileContent>
                            </ChatProfile>
                        </ChatListContent>
                        
                    </ChatListSection>
                </ChatList>
                <ChatContent>
                    <ChatNickName>
                        <ChatNichNameText>닉네임</ChatNichNameText>
                        <ChatWarningIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </ChatWarningIcon>
                    </ChatNickName>
                    <ChatMain>
                        <ChatArea></ChatArea>
                        <SendTextSection>
                            <SendTextInput type='text' />
                            <SendPicIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </SendPicIcon>
                            <SendIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </SendIcon>
                        </SendTextSection>
                    </ChatMain>
                </ChatContent>
            </ChatSection>
            <Footer></Footer>
        </ChatPage>
    )
}

const ChatPage = styled.div`
display:flex;
flex-direction: column;`

const ChatSection = styled.div`
display:flex;
flex-direction:row;
width: 48.13rem;
margin: 10rem auto 0rem;
border-top: 1px solid rgb(189,189,189);`

const ChatList = styled.div`
display:flex;
flex-direction: column;
width: 12.56rem;`

const ChatContent = styled.div`
width: 35.57rem;
display:flex;
flex-direction: column;`

const ChatListText = styled.p`
font-size: 1rem;
font-weight: 500;
margin: 1rem auto;`

const ChatListSection = styled.div`
width: 100%;
display:flex;
height: 34.4rem;
flex-direction: column;
overflow-y: auto;
overflow-x: hidden;
border: 1px solid rgb(189,189,189);
border-top: none;
border-right: none;`

const ChatListContent = styled.div`
width: 100%;
display: flex;
flex-direction: row;
height: 3.75rem;
border: 1px solid rgb(189,189,189);
border-left: none;
cursor: pointer;
&:hover{
    background-color: rgb(240,240,240);
}`

const ChatNickName = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
width: 100%;`

const ChatProfileImg = styled.div`
width: 2.18rem;
height: 2.18rem;
border: 1px solid purple;
border-radius: 50%;
margin: auto 0.5rem;`

const ChatProfile = styled.div`
width: 8rem;
height: 2.5rem;
margin: auto 0rem;
overflow-y: hidden;`

const ChatProfileNickName = styled.p`
font-size: 0.82rem;
font-weight: 600;
margin: 0rem 0rem 0.3rem;`

const ChatProfileContent = styled.div`
font-size: 0.74rem;
font-weight: 400;
width: 7.5rem;
margin: 0rem;
overflow-x: hidden;
overflow-y: hidden;`

const ChatNichNameText= styled.p`
font-size: 1rem;
font-weight: 500;
margin: 1rem auto;`

const ChatWarningIcon = styled.svg`
width: 1.5rem;
margin: auto 1rem auto 0rem;
height: 1.5rem;
cursor: pointer;`

const ChatMain = styled.div`
width: 100%;
height: 34.4rem;
border: 1px solid rgb(189,189,189);`

const ChatArea = styled.div`
width: 100%;
height: 30.97rem;`

const SendTextSection = styled.div`
width: 100%;
height: 3.45rem;
display: flex;
flex-direction: row;
border-top: 1px solid rgb(189,189,189);`

const SendTextInput = styled.input`
width: 27.5rem;
height: 3.4rem;
border: none;
padding: 0rem 1rem;`

const SendPicIcon = styled.svg`
width: 1.87rem;
height: 1.87rem;
margin: auto 0rem auto 1rem;
cursor: pointer;`

const SendIcon = styled.svg`
width: 1.87rem;
height: 1.87rem;
margin: 0.6rem 1rem auto 0.5rem;
transform: rotate(225deg);
cursor: pointer;`
export default Chat;