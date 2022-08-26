import React, { useReducer, useState } from 'react';

const init = {
    value1: 0,
    value2: 5
};

const reducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return {...state, value1: state.value1 + action.val};
        case "decrement":
            return {...state, value1: state.value1 - action.val};
        case "increment2":
            return {...state, value2: state.value2 + action.val};
        case "decrement2":
            return {...state, value2: state.value2 - action.val};
        case "reset":
            return init;
        default: 
            return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, init);
    // const [count, setCount] = useState(0);

    return (
        <div className='text-center my-3'>
            <h2 className='text-center'>{count.value1}</h2>
            <h2 className='text-center'>{count.value2}</h2>
            <div className='text-center my-3'>
                <button className='btn btn-success' onClick={()=>dispatch({type:"increment", val:1})}>1افزایش</button>
                <button className='btn btn-danger mx-3' onClick={()=>dispatch({type:"decrement", val:2})}>2کاهش</button>
            </div>
            <div className='text-center my-3'>
                <button className='btn btn-success' onClick={()=>dispatch({type:"increment2", val:5})}>5افزایش</button>
                <button className='btn btn-danger mx-3' onClick={()=>dispatch({type:"decrement2", val:5})}>5کاهش</button>
            </div>
            <button className='btn btn-warning' onClick={()=>dispatch({type:"reset"})}>ریست</button>
        </div>
    );
}

export default Counter;
