import React, { useContext } from 'react'
import valueContext from './ValueContext'


////---------------------- passing from parent <--App
// function Child(Props){

//     return(
//         <div>
//       The value imported from App = {Props.num}
//         </div>
//     )
// }

///-------------passing through value context
function Child(Props){
    let value = useContext(valueContext)
    return(
        <div>
      The value imported from App = {value}
        </div>
    )
}


export default Child