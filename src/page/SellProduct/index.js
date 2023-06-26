import styled from "styled-components";
import MainHeader from "../../components/MainHeader";
import MyProfile from "../../components/MyPageProfile";
import MyPageMenus from "../../components/MyPageMenus";
import Footer from "../../components/MainFooter/Footer";
import CategoryModal from "../../components/CategoryModal/CategoryModal";
import React from "react";

function SellProduct() {
    return(
        <SellProductPage>
            <MainHeader></MainHeader>
            <SellProductSection>
                <MyProfile></MyProfile>
                <SellProductMain>
                    <MyPageMenus></MyPageMenus>
                </SellProductMain>
            </SellProductSection>
            <CategoryModal/>
            <Footer></Footer>
        </SellProductPage>
    )
}

const SellProductPage = styled.div`
display:flex;
flex-direction: column;`

const SellProductSection = styled.div`
display:flex;
flex-direction: column;`

const SellProductMain = styled.div`
display:flex;
flex-direction: row;
border: 1px solid red;
width: 48.13rem;
margin:auto;`

export default SellProduct;