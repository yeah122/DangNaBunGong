import { storageService } from "../firebase";
import Login from "../routes/Login";
import { ref, getDownloadURL } from "@firebase/storage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import KakaoLogin from "../routes/KakaoLogin";

function App() {
  // firebase에서 로고 이미지를 불러오고 있는가
  const [loading, setLoading] = useState(true);
  // firebase에서 불러온 로고 이미지 주소
  const [attachmentUrl, setAttachmentUrl] = useState("");

  const getLogoImg = async () => {
    // firebase로부터 로고 이미지 주소를 불러옴
    const attachmentRef = ref(storageService, "logo.png");
    setAttachmentUrl(await getDownloadURL(ref(storageService, attachmentRef)));
    setLoading(false);
  };

  useEffect(() => {
    getLogoImg();
  }, []);

  // 각 화면 경로를 설정
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
