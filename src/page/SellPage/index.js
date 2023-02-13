import MainHeader from "../../components/MainHeader";
import styled from "styled-components";

function SellPage () {
    return(
        <SellPages>
            <div>
            <MainHeader />
            </div>
            <SellSection>
                <SellTitle>상품 등록</SellTitle>
                <SellTextPart>
                    <SellText>제목</SellText>
                    <SellInput tyle="text"></SellInput>
                </SellTextPart>
                <SellTextPart>
                    <SellExplainTitle>상품이미지</SellExplainTitle>
                    <SellPicPart>
                        <SellPic>
                            <PicIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                            </PicIcon>
                            <PicText>이미지 등록</PicText>
                        </SellPic>
                        <div>
                            <PicCaution>*상품 이미지는 640x640에 최적화 되어 있습니다.</PicCaution>
                            <PicCaution>-이미지는 상품 등록 시 정사각형으로 잘려서 등록됩니다.</PicCaution>
                            <PicCaution>-이미지를 클릭 후 이동 시 등록순서를 변경할 수 있습니다.</PicCaution>
                            <PicCaution>-큰 이미지일 경우 이미지가 깨질 수 있습니다.</PicCaution>
                        </div>
                    </SellPicPart>
                </SellTextPart>
                <SellTextPart>
                    <SellText>카테고리</SellText>
                    <SellCategory>
                    <SellSelect tyle="select">
                        <option value="1">대분류</option>
                    </SellSelect>
                    <SellSelect tyle="select">
                        <option value="2">소분류</option>
                    </SellSelect>
                    </SellCategory>
                </SellTextPart>
                <SellTextPart>
                    <SellText>가격</SellText>
                    <SellInput tyle="text"></SellInput>
                </SellTextPart>
                <SellTextPart>
                    <SellText>거래 지역</SellText>
                    <SellInput tyle="text"></SellInput>
                </SellTextPart>
                <SellTextPart>
                    <SellExplainTitle>상품 소개</SellExplainTitle>
                    <SellExplain tyle="text"></SellExplain>
                </SellTextPart>
                <SellButtons>
                    <SellButton>등록하기</SellButton>
                    <SellCancelButton>취소</SellCancelButton>
                </SellButtons>
            </SellSection>
        </SellPages>
    )
}

const SellPages = styled.div`
display:flex;
flex-direction: column;
`

const SellSection = styled.div`
width: 48.13rem;
margin: auto;
margin-top: 10rem;
border-top: 1px solid rgb(189,189,189);
display:flex;
flex-direction: column;`

const SellTitle = styled.p`
font-size: 1.125rem;
font-weight: 800;
margin: 2rem 0rem 0rem;`

const SellTextPart = styled.div`
width: 47rem;
margin-top: 1.8rem;
display: flex;
flex-direction: row;`

const SellText = styled.p`
font-size: 1rem;
margin:auto 1rem auto 0rem;
width: 5rem;`

const SellInput = styled.input`
width: 39.43rem;
height: 3rem;
margin-left:1rem;
border: 1px solid rgb(189,189,189);
border-radius: 5px;
padding:0 0.5rem;`

const SellPicPart = styled.div`
width: 20rem;
margin-left: 1rem;`

const SellPic = styled.button`
width: 17rem;
height: 17rem;
border: none;
border-radius: 5px;
margin-bottom: 1rem;
display:flex;
flex-direction:column;
justify-content: center;`

const PicIcon = styled.svg`
width: 9rem;
height: 9rem;
margin: 2.5rem auto;`

const PicText = styled.p`
margin: 0 auto 2rem;
font-weight: 600;`

const PicCaution = styled.p`
line-height: 0.4rem;
color: rgb(5,14,207);
font-size: 0.72rem;
margin-bottom: 0.2rem;
`

const SellCategory = styled.div`
width: 15rem;
height: 3rem;
margin-left: 1rem;
display:flex;
flex-direction: row;
`

const SellSelect = styled.select`
width: 8rem;
height: 2rem;
margin : auto 0;
margin-right: 1rem;
padding: 0.3rem;`

const SellExplainTitle = styled.p`
font-size: 1rem;
margin:0.5rem 1rem 0 0rem;
width: 5rem;`

const SellExplain = styled.textarea`
min-width: 38.8rem;
min-height: 20rem;
max-width: 38.8rem;
max-height: 20rem;
overflow-y:auto;
padding: 0.6rem;
margin-left: 1rem;
border: 1px solid rgb(189,189,189);
border-radius: 5px;`

const SellButtons = styled.div`
margin: 2rem auto;
`
const SellButton = styled.button`
border: none;
width: 7.31rem;
height: 2.87rem;
background-color: rgb(242,17,17);
color: white;
font-size: 1rem;
margin-right: 1rem;`

const SellCancelButton = styled.button`
border: 1px solid rgb(189,189,189);
width: 7.31rem;
height: 2.87rem;
font-size: 1rem;
margin-left: 1rem;`

export default SellPage;