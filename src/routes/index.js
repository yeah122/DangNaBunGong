import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../page/Main";


function RootRoute() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RootRoute;