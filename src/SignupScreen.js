import React,{ useState,useRef } from 'react';
import "./SignupScreen.css";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Axios from "axios";
import HomeScreen from './HomeScreen';

function SignupScreen() {
   
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");
    const [signInnn, setSignInnn] = useState(false);
    const [home,setHome] = useState(false);
 
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
   
    const register = (e) =>{
        e.preventDefault();  
    };

    const signIn = (e) =>{
        e.preventDefault();
    }
    return ( 
        <>  
<div className="loginScreen">
<div className="loginScreen_background">
    <img className="loginScreen_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix logo" />
    <button onClick={() => setSignInnn(true)} className="loginScreen_button" >Sign In</button>
    <div className="loginScreen_gradient" />

</div>
<div className="loginScreen_body">

<div className='signupScreen'>

<form>
<h1>Sign In</h1>
<input ref = {emailRef} onChange={(e)=>{
setemail(e.target.value);
}} placeholder='Email' type="email" />
<input ref={passwordRef} onChange={(e)=>{
setpass(e.target.value);
}}
placeholder='Password' type="password" />
<button type="button" onClick={signIn}>Sign In</button>
<h4>
<span className='signupScreen_gray'>New to Netflix? </span>
<span className='signupScreen_link' onClick={register}>Sign Up now.</span> 
</h4>

</form>
</div>
</div>
</div>
</div>}    
          
         
         </>
    );
}

export default SignupScreen;