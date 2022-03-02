import React,{ useState,useRef } from 'react';
import "./SignupScreen.css";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Axios from "axios";
import HomeScreen from './HomeScreen';

function SignupScreen() {
    var customAlert= document.getElementById("cAlert");
    var customAlert1= document.getElementById("cAlert1");
    var flag = false;
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");
    const [signInnn, setSignInnn] = useState(false);
    const [home,setHome] = useState(false);
 
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
   
    const register = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3006/log',{
            email:email,
            pass:pass,
        
            
        }).then((response)=>
        {
            
            console.log(response);
            
        });
        customAlert1.style.display='block';      
              document.getElementById('cBtn1').onclick = function() {
                customAlert1.style.display='none';
                let x = document.querySelectorAll('input');
        for(let i in x)
        {
            x[i].value=""
        }
              };
        
    };

    const signIn = (e) =>{
        e.preventDefault();
        Axios.post('http://localhost:3006/logInn',{
            email:email,
            pass:pass,
        
            
        }
        ).then((response)=>
        {
            if(response.data.message)
            {
               
               
                console.log(response.data.message)
                // alert("Wrong E-mail or Password!");
                
                customAlert.style.display='block';
                
                document.getElementById('cBtn').onclick = function() {
                  customAlert.style.display='none';
                };
            }
            else{
                
                setHome(true);
                console.log(response.data[0].email)
                
               
            }
            
        
        });
        let x = document.querySelectorAll('input');
        for(let i in x)
        {
            x[i].value=""
        }
     
    }
    return ( 
        <>  
        {home?(
        <Router>
        <Routes>
            <Route path="/"  element={<HomeScreen/>} exact />
            </Routes>
        </Router>):(

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
<div id="cAlert">
    <div id="box">
    <div class="heading">
        Alert!
    </div>
    <div class="content">
        <p>Wrong E-mail or Password</p>
        <button type="button" id="cBtn">Ok</button>
    </div>
    </div>
</div>
<div id="cAlert1">
    <div id="box1">
    <div class="heading1">
        Alert!
    </div>
    <div class="content1">
        <p>Successfully registered</p>
        <button type="button" id="cBtn1">Ok</button>
    </div>
    </div>
</div>
</div>
</div>
</div>
        )}    
          
         
         </>
    );
}

export default SignupScreen;