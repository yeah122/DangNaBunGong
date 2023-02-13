import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import Logo1 from "../components/Logo1";
import SignUp from "../page/SignUp";
import SellPage from "../page/SellPage";


function RootRoute() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainHeader/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/SellPage" element={<SellPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RootRoute;