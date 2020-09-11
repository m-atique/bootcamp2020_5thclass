import React, { useContext } from 'react'
import valueContext from './ValueContext'



function Child(Props){
    let value = useContext(valueContext)

    return(
      <center>
        <div>
      <h3>The value imported from App </h3>
      <h1>{value[0]}</h1>
      <br />

      <button onClick = {()=> value[1](++value[0])}>Update Number</button>
      <br />
      <br />
        </div>
        </center>
    )
}


export default Child
















////---------------------- passing from parent <--App
// function Child(Props){

//     return(
//         <div>
//       The value imported from App = {Props.num}
//         </div>
//     )
// }

///-------------passing through value context