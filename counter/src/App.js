import {useState} from 'react';
import './App.css';


function App() {
  const[count,setcount] = useState(0)
const increament = () =>{
  setcount(count+1)
}
const decrement = () =>{
  setcount(count-1)
}
  return (
       <div className='container'>
        <div className='header'>
            <h1>{count}</h1>
       </div>
       <div className='btnBox'>
          <button onClick={increament}>Increase</button>
          <button onClick={decrement}>Decrease</button>
       </div>
       </div>
    );
}

export default App;
