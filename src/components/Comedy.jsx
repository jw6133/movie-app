import React, { useEffect, useState } from 'react'
import { fetchComedyMovies } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import {styled} from 'styled-components';
import OverView from './OverView';

//swiper
import {Swiper,SwiperSlide} from 'swiper/react'; //스와이퍼 적용 import (ctrl space?)
import 'swiper/css'; //스와이퍼 기본 css 적용 임포트
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css'; //스와이퍼 기본 css
import 'swiper/css/navigation'; //스와이퍼 좌우버튼 css
import 'swiper/css/pagination'; //스와이퍼 도트리스트 css
import '../styled/swiperCustomCss.css';


function Comedy() {
    const [isClick,setIsClick] = useState(false);
    const dispatch = useDispatch(); //생성된 action에 state에 접근
    useEffect(()=>{
        dispatch(fetchComedyMovies())
    },[])
    //console.log(fetchActionMovies());

    const actionData = useSelector((state)=>state.action.movies, []) || [];
    // console.log(actionData.results);

    const overViewEvent = (el)=>{
        setIsClick(el);
    }

    const overViewClose = () =>{
        setIsClick(false);
    }
    return (
        <div>
            <MovieContainer>
                <MovieTitle>코미디</MovieTitle>
                <Swiper
                    spaceBetween={10}//슬라이드 간의 여백(gap)
                    slidesPerView={5} //한번에 보여질 슬라이드 아이템의 갯수
                    slidesPerGroup={5} //슬라이드 이동시 한번에 움직일 슬라이드 아이템의 갯수
                    loop //무한반복
                    modules={[Navigation, Pagination]} //모듈 가져오기
                    navigation //실제 적용
                    pagination
                >
                    <MovieWrapper>
                        {actionData.results && actionData.results.map((el,index)=>(
                            <SwiperSlide>
                                <MovieItem onClick={()=>overViewEvent(el,index)}>
                                    <img src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}/>
                                </MovieItem>
                            </SwiperSlide>
                        ))}
                    </MovieWrapper>
                </Swiper>
            </MovieContainer>
            {isClick && <OverView movie={isClick} setIsClick={overViewClose}/>}
        </div>
    )
}


const MovieContainer = styled.div`
    margin-bottom:50px;
    position: relative;
    box-sizing : border-box;
`
const MovieTitle = styled.div`
    font-size:40px;
    font-weight:bold;
    color:#ffffff;
`
const MovieWrapper = styled.div`
    
    height:200px;
`
const MovieItem = styled.div`
    display: block;
    width:100%;
`


export default Comedy;
