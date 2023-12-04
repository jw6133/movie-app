/*
axios
node.js에서 백엔드와 통신하기 위해 만들어진 http 비동기 통신 라이브러리
yarn add axios
*/

import axios from "axios";

const API_KEY = '1105341b426cb5e8ab3e1d7689a8a4a5'; // 계정마다 발급받는 api키를 변수화
const BASE_URL = 'https://api.themoviedb.org/3'; //영화의 정보를 받아올 url의 공통 주소

const instance = axios.create({
    baseURL : BASE_URL,
    params :{
        api_key : API_KEY,
        language : 'ko-KR'
    }
})

export default instance;