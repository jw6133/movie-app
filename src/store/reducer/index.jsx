//redux
//전역상태관리
//redux는 프로그래밍에서 redux를 사용하기위해 설치하는 라이브러리이며
/*
react-redux는 리액트에서 redux를 사용하기 위한 또 다른 라이브러리

전역 상태 관리 라이브러리
리액트는 변경되는 값들을 보통 useState로 지정해서 관리를 한다
보통 관리해야 할 값이 적을경우 state로 관리할 수 있지만 컴포넌트끼리 공유할 상태값이 서로 달라
엉키게 되면 state는 한계점이 명확해진다.
props로 상태값을 관리하면 가독성이 떨어지며, 유지보스에 어려움이 있다. 
props로 상태값 관리 시 가독성 저하 및 유지보수에 어려움이 있다.

이러한 state의 단점을 보완해 하나의 공간에 데이터들을 다 모아두고 전역으로 상태를 관리하는 방식
redux는 store라는 상태 저장소를 사용하며, 이 store에서 관리되는 상태값들은 일반적으로
꺼내오거나 변경은 불가능하다.(상태값의 안전성)
store에서는 자바스크립트의 객체 형태로 저장된다.

redux에서는 
action -> dispatch -> reducer -> store 순으로 데이터가 진행이 된다

action : 상태를 변경하려는 객체
dispatch : store에서 action에 전달하기 위해 제공하는 하나의 방법
변경될 내용이 전달되면 reducer가 코드를 처리하고 업데이트 한다.
*/
import {combineReducers} from "redux"; //import된것은 {}괄호로 감싸주기 !!!!중요!!!!
import {FETCH_ACTION_MOVIES} from '../';
import { FETCH_COMEDY_MOVIES } from "../";

const actionMovieReducer = (state=[],action)=>{
    switch(action.type){
        case FETCH_ACTION_MOVIES:
            return{
                ...state,
                movies:action.data
            }
        default:
            return state;
    }
}

const comedyMovieReducer = (state=[],comedy)=>{
    switch(comedy.type){
        case FETCH_COMEDY_MOVIES:
            return{
                ...state,
                movies:comedy.data
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    action : actionMovieReducer,
    comedy : comedyMovieReducer,
})
//여러개의 reducer를 하나의 store에서 실행가능하도록 해주는 메서드
//장르마다 불러올 reducer가 다르기 때문에

export default rootReducer;