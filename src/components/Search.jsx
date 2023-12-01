import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { MdClear } from "react-icons/md";
import {styled} from 'styled-components';

function Search() {
    const [text,setText]=useState('')//검색어의 텍스트를 받아올 상태 state
    const [visible,setVisible] = useState(false)//인풋창의 기본 속성 값 지정
    const [showClearBtn, setshowClearBtn] = useState('')
    //검색어의 입력 여부를 보기 위한 값
    const onToggleEvent=(e)=>{
        e.preventDefault();
        setVisible((prev)=>!prev)
    }
    const onClear=(e)=>{
        e.preventDefault();//이벤트에 필수적으로 삽입해야함
        setText('');
        setshowClearBtn(false)

    }
    return (
        <>
            <SearchForm visible={`${visible}`} className={visible? 'on' : null}>
                {/* react에서의 null은 값을 비운다는 의미이기도 하다. */}
                <button className='search-btn' onClick={onToggleEvent}><BiSearch /></button>
                {visible &&(
                    <input 
                    value={text}
                    type='text' 
                    placeholder='검색어를 입력하세요'
                    onChange={(e)=>{
                        setText(e.target.value);
                        setshowClearBtn(e.target.value.trim()!=='');
                    }}
                    ></input>
                )}
                {showClearBtn &&(
                    <button className='clear-btn' onClick={onClear}><MdClear /></button>
                )}
                
            </SearchForm>
        </>
    )
}

export default Search

const SearchForm = styled.form`
    display:flex;
    position:relative;
    top:0;
    left:0;
    transition: 500ms;
    &.on{
        border-color: #ffffff;
    }
    .search-btn{
        color:#ffffff;
        font-size:24px;
        display:flex;
        align-items:center;
    }
    .clear-btn{
        position:absolute;
        top:0;
        right:0;
        color:#ffffff;
        font-size:24px;
        display:flex;
        align-items:center;
    }
    input{
        width: ${({visible})=>(visible? '200px':'0px')};
        color:#ffffff;
        opacity: ${({visible})=>(visible? 1 : 0)};
        transition: opacity 500ms;
    }
`