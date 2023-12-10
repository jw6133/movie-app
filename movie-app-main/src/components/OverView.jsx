import React, { useState,useRef } from 'react'
import styled from 'styled-components';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function OverView({setIsClick, movieId, backdrop_path ,title, overview }) {
    const [isVisible,setIsVisible] = useState(false);
    const overViewRef = useRef(null);
    return (
        <HoverContainer className={`overview${isVisible ? 'visible' : ''}`} ref={overViewRef}>
            <HoverWrapper>
                <CloseBtn onClick={()=>setIsClick(false)}>
                <IoMdClose />
                </CloseBtn>
                <Link to={`/movie/${movieId}`}>
                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}/>
                </Link>
                <HoverText>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </HoverText>
            </HoverWrapper>
        </HoverContainer>
    )
}

const HoverContainer = styled.div`
    width:100vw;
    background:rgba(0,0,0,0.5);
    position:fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:999;
`
const HoverWrapper = styled.div`
    height:auto;
    max-width:50%;
    background:gray;
    position:relative;
    border-radius:10px;
    overflow:hidden;
`
const CloseBtn = styled.button`
    width:30px;
    height: 30px;
    border:100%;
    background:black;
    position: absolute;
    top:30px;
    right:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100%;
    svg{
        width:30px;
        height:30px;
        path{
            color:#fff;
        }
    }
`
const HoverText = styled.div`
    padding:30px;
    box-sizing:border-box;

`
export default OverView
