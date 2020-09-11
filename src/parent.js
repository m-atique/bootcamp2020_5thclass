import React from 'react';
import Child from './child.js';
import Child2 from './child2'

function Parent(Props) {
    return(
        <div>
      <Child num = {Props.num}></Child>
      <Child2></Child2>
      
    </div> 
    );
}




export default Parent;