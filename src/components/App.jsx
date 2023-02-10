import { storageService } from "../firebase";
import Login from "../routes/Login";
import { ref, getDownloadURL } from "@firebase/storage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import KakaoLogin from "../routes/KakaoLogin";

function App() {
  const [loading, setLoading] = useState(true);
  const [attachmentUrl, setAttachmentUrl] = useState("");

  const getLogoImg = async () => {
    const attachmentRef = ref(storageService, "logo.png");
    setAttachmentUrl(await getDownloadURL(ref(storageService, attachmentRef)));
    setLoading(false);
  };

  useEffect(() => {
    getLogoImg();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <></>
      ) : (
        <>
          <Router>
            <Routes>
              <Route
                path="/loginDo"
                element={<Login LogoImg={attachmentUrl} />}
              ></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/kakaoLogin" element={<KakaoLogin />}></Route>
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
