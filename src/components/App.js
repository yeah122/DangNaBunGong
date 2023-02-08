import Login from "../routes/Login";
import logoImgPath from "../img/logo.png";
import "../style/App.css";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <span className="logo-text">당근나라</span>
        <img src={logoImgPath} alt="당근나라번개공주" width={47} height={85} />
        <span className="logo-text">번개공주</span>
      </div>
      <Login />
    </div>
  );
}

export default App;
