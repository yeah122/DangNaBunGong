import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import SignUp from "../page/SignUp";
import SellPage from "../page/SellPage";
import ProductPage from "../page/ProductPage";
import FoundId from "../page/FoundId";
import FoundPw from "../page/FoundPw";
import MyPage from "../page/MyPage";
import ChangePw from "../page/ChangePw";
import DeleteAccount from "../page/DeleteAccount";
import SellProduct from "../page/SellProduct";
import RewriteMyProfile from "../page/RewriteMyProfile";
import Chat from "../page/Chat";
import SomeonePage from "../page/SomeonePage";
import Login from "../page/Login";


function RootRoute() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainHeader/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SellPage" element={<SellPage/>}/>
            <Route path="/ProductPage" element={<ProductPage/>}/>
            <Route path="/FoundId" element={<FoundId />}/>
            <Route path="/FoundPw" element={<FoundPw />}/>
            <Route path="/MyPage" element={<MyPage />}/>
            <Route path="/ChangePw" element={<ChangePw />}/>
            <Route path="/DeleteAccount" element={<DeleteAccount />}/>
            <Route path="/SellProduct" element={<SellProduct />}/>
            <Route path="/RewriteMyProfile" element={<RewriteMyProfile />}/>
            <Route path="/Chat" element={<Chat />}/>
            <Route path="/SomeonePage" element={<SomeonePage />}/>
            <Route path="/Login" element={<Login />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RootRoute;