import React, { useEffect, useState } from 'react'
import { fetchActionMovies } from '../store';
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
import MovieCard from './MovieCard';
import { fetchGenres } from '../api/api';


function Action() {
    const [itemSelect, setItemSelect] = useState({});
    const [isClick,setIsClick] = useState(false);
    const [genres,setGenres] = useState({});
    const dispatch = useDispatch(); //생성된 action에 state에 접근
    useEffect(()=>{
        dispatch(fetchActionMovies())
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

    //장르 추가
    useEffect(()=>{
        const fetchActionMovieGenres = async()=>{
            dispatch(fetchActionMovies());
            const genres = await fetchGenres();
            setGenres(genres);
        }
        fetchActionMovieGenres();
    },[])
    
    const getGenreText = (genreId)=>{
        return genreId.map((el)=>genres[el]).join()
    }

    const movieClickEvent = (movie)=>{
        setItemSelect(movie);
        setIsClick(true);
    }

    return (
        <div>
            <MovieContainer>
                <MovieTitle>액션</MovieTitle>
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
                                <MovieCard movie={el} genreText={getGenreText(el.genre_ids)}
                                onClick = {movieClickEvent}
                                
                                />
                            </SwiperSlide>
                        ))}
                    </MovieWrapper>
                </Swiper>
            </MovieContainer>
            {isClick && (
                <OverViewWrapper isVisible={!!itemSelect}>
                <OverView {...itemSelect} setIsClick={()=>setIsClick(false)}/>
                {/* <OverView movie={isClick} setIsClick={overViewClose}/> */}
            </OverViewWrapper>
            )}
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
const OverViewWrapper = styled.div`
    display: ${props => [props.isVisible ? 'block' : 'none']};
    width : 100vw;
    background : rgba(0,0,0,0.7);
    display:flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    top:0;
    left:0;
    z-index:999;
`


export default Action;
