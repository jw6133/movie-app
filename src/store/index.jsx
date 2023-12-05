import axios from "axios";

export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';

const API_KEY = '1105341b426cb5e8ab3e1d7689a8a4a5'; // 계정마다 발급받는 api키를 변수화
const BASE_URL = 'https://api.themoviedb.org/3';

//액션
export const fetchActionData = (data)=>{
    return {
        type : FETCH_ACTION_MOVIES,
        data
    }
}

export const fetchActionMovies = () =>{
    return(dispatch)=>{
        //dispatch : 외부에서 데이터를 가져올 때 사용하는 reducer의 기능 useState의 대체
        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
        .then((res)=>{
            dispatch(fetchActionData(res.data))
            //then => axios에서 콜백함수를 대체하는 return과 같은 구문
        })
    }
}

export const fetchComedyData = (data)=>{
    return {
        type : FETCH_COMEDY_MOVIES,
        data
    }
}

export const fetchComedyMovies = () =>{
    return(dispatch)=>{
        //dispatch : 외부에서 데이터를 가져올 때 사용하는 reducer의 기능 useState의 대체
        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
        .then((res)=>{
            dispatch(fetchActionData(res.data))
            //then => axios에서 콜백함수를 대체하는 return과 같은 구문
        })
    }
}

/*

*/