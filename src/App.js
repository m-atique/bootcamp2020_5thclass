import React,{ useState } from 'react';
import Parent from './parent.js';
import valueContext from './ValueContext.js';


//-----------Method to pass value ( app --> parent --> Child)
// function App() {
//   let [number ,setNumber] = useState(10)
//   return (
//     <div>
//       <h1>Pasing Value  via root (APP-Parent-child)</h1>
//       <br />
//       <Parent num = {number}></Parent>
//       <br />
//       <br />
//       <button onClick = {()=> setNumber(++number)}>Update Number</button>
//     </div>
//   );
// }

function App() {
  let num = 81
  return (
    <valueContext.Provider value ={num}>
    <div>
      <h1>Pasing Value  via value context</h1>
    
      <br />
      <Parent></Parent>
      <br />
      <br />
     {/* <button onClick = {()=> setNumber(++number)}>Update Number</button> */}
    </div>
    </valueContext.Provider>
  );
}

export default App;
