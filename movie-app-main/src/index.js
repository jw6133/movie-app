import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './styled/GlobalStyle';
import Main from './pages/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import MainVideos from './components/MainVideos';
import MovieList from './components/MovieList';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import rootReducer from './store/reducer';
import {thunk} from 'redux-thunk';
import MovieDetail from './pages/MovieDetail';
/*
import시 {} 쓰는것과 안하는것의 차이
기능을 내보내기하는 방법에 따라 차이가 발생

{}가 없는 import는 보통 export default로 내보내기 된 컴포넌트를 import
{} 사용하는 import는 default가 아닌 하나의 컴포넌트에 여러개의 export가 되어 있는 경우
각각 가져오기 위해서 사용한다.
*/

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<NotFound/>,
    children:[
      /*children
      중첩 라우터를 children으로 연결하게 되면 내부에 있는 파일은 부모 요소의 링크를 기준으로 잡힌다.
      내부에 children으로 작성하게 되면 중첩되는 url은 생략가능 */
      // {path:''}
      
    ]
  },
  {
    path:'movie/:movieId', //:이 붙으면 변수값이 된다(보통 ID값이 됨)=>유동적인 값
    element:<MovieDetail/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    

    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
