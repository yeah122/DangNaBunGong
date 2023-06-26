import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import SignUp from "../page/SignUp";
import Login from "../page/Login";
import Main from "../page/MainPage";
import ArticleListPage from "../page/ArticleListPage";
import SellPage from "../page/SellPage";
import ProductPage from "../page/ProductPage";
import FoundId from "../page/FoundId";
import FoundPw from "../page/FoundPw";
import MyPage from "../page/MyPage";
import ChangePw from "../page/ChangePw";
import DeleteAccount from "../page/DeleteAccount";
import SellProduct from "../page/SellProduct";
import RewriteMyProfile from "../page/RewriteMyProfile";
import MPCustomerCenter from "../page/MPCustomerCenter";
import CustomerCenterMain from "../page/CustomerCenter/Main";
import CustomerCenterInquire from "../page/CustomerCenter/Inquire";
import CustomerCenterDetail from "../page/CustomerCenter/Detail";
import CustomerCenterMyInquiry from "../page/CustomerCenter/MyInquiry";
import CustomerCenterFAQ from "../page/CustomerCenter/FAQ";
import Chat from "../page/Chat";
import SomeonePage from "../page/SomeonePage";
import Auth from "../components/Auth";
import Notice from "../page/Notice";


function RootRoute() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/MainHeader" element={<MainHeader/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/ArticleListPage" element={<ArticleListPage/>}/>
            <Route path="/SellPage" element={<SellPage/>}/>
            <Route path="/ProductPage" element={<ProductPage/>}/>
            <Route path="/FoundId" element={<FoundId />}/>
            <Route path="/FoundPw" element={<FoundPw />}/>
            <Route path="/MyPage" element={<MyPage />}/>
            <Route path="/ChangePw" element={<ChangePw />}/>
            <Route path="/DeleteAccount" element={<DeleteAccount />}/>
            <Route path="/SellProduct" element={<SellProduct />}/>
            <Route path="/RewriteMyProfile" element={<RewriteMyProfile />}/>
            <Route path="/MyPage/CustomerCenter" element={<MPCustomerCenter />}/>
            <Route path="/CustomerCenter" element={<CustomerCenterMain />}/>
            <Route path="/CustomerCenter/Inquire" element={<CustomerCenterInquire />}/>
            <Route path="/CustomerCenter/Detail" element={<CustomerCenterDetail />}/>
            <Route path="/CustomerCenter/MyInquiry" element={<CustomerCenterMyInquiry />}/>
            <Route path="/CustomerCenter/FAQ" element={<CustomerCenterFAQ />}/>
            <Route path="/Chat" element={<Chat />}/>
            <Route path="/oauth/kakao/callback" element={<Auth />}/>
            <Route path="/Notice" element={<Notice />}/>
            <Route path="/SomeonePage" element={<SomeonePage />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RootRoute;