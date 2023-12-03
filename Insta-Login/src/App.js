import {useState} from 'react'
import logo from './Image/instagram.png'
import './App.css';

function App() {
const [login , setlogin] = useState(true)
const loginSwitch = ()=> {
   setlogin(!login)
}
  return (
    <div className="auth">
          <div className="user">
               <img src={logo} alt="logo" />
               <input hidden = {login} type="text" placeholder="Full Name"/>
               <input type="text" placeholder="Phone number, username, or email"/>
               <input type="text" placeholder="password"/>
               <input hidden = {login} type="text"  placeholder="confirm password"/>
               <button className="btn">{login ? "Sign in" : "Sign up"}</button>
         
         <div className="footer">
              {login ? "Don't have an account ? " : "have an account ?"}
              <span onClick= {loginSwitch} >
                  {login ? "Sign up" : " Log in"}
              </span>
          </div>
          </div>  
    </div>
  );
}

export default App;
