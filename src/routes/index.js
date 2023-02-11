import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from "../page/MainHeader";
import Logo1 from "../components/Logo1";
import SignUp from "../page/SignUp";


function RootRoute() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainHeader/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RootRoute;