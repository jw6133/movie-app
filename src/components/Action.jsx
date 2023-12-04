import React, { useEffect } from 'react'
import { fetchActionMovies } from '../store';
import { useDispatch, useSelector } from 'react-redux';

function Action() {
    const dispatch = useDispatch(); //생성된 action에 state에 접근
    useEffect(()=>{
        dispatch(fetchActionMovies())
    },[])
    //console.log(fetchActionMovies());

    const actionData = useSelector((state)=>state.action.movies, []) || [];
    console.log(actionData.results);
    return (
        <div>
            
        </div>
    )
}

export default Action
