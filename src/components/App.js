import { storageService } from "../firebase";
import Login from "../routes/Login";
import { ref, getDownloadURL } from "@firebase/storage";
import { useEffect, useState } from "react";

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
      {loading ? <></> : <Login LogoImg={attachmentUrl} />}
    </div>
  );
}

export default App;
