import React, { useReducer } from 'react';
import ContentReducer from './ContextReducer';

const  Child2 =()=>{
    let [num ,dispatch] = useReducer(ContentReducer,0)
    return(
        <center>
        <div>
            <hr />
            <h1>Importing values using Reducer</h1>
            <h3>The Value of Number is</h3>
            <h1>{num}</h1>
            <br />
            <br />
            <button onClick= {()=> dispatch('increament')}>Increament</button>
            {/* <button onClick= {()=> dispatch('decreament')}>decreament</button> */}
        </div>
        </center>

    )
}

export default Child2
