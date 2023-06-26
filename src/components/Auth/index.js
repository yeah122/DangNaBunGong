import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth() {

    const navigate = useNavigate();

    const code= new URL(window.location.href).searchParams.get("code");
      useEffect(()=> {
          const params = new URL(document.location.toString()).searchParams;
          const code = params.get("code");
          const grant_type = "authorization_code";
          const client_id = "0aab8850b0f1de3b11837d1e5e945b8b";
          const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
    
          axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`
              , {
          headers: {
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((res) => {
            localStorage.setItem('token',JSON.stringify(res))
            // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        })
      }, [])
      
      axios.post("", {
                access_Token: {code}
            }).then((res) => {
                console.log(res)
                navigate('/')
            });

    return(
        <>
        </>
    )
}

export default Auth;