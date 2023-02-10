const KAKAO_API_KEY = "6efb51262cde570bdc4e1c81b0f3096d";
const REDIRECT_URI = "http://localhost:3000/kakaoLogin";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export default KAKAO_AUTH_URL;
