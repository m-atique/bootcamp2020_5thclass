import React from 'react';
import Child from './child.js';

function Parent(Props) {
    return(
        <div>
      <Child num = {Props.num}></Child>
    </div> 
    );
}




export default Parent;