import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import LoginScreen from "./LoginScreen"
import SignupScreen from './SignupScreen';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
function App() {


  return (

     <div className="app">
        <LoginScreen />
        </div>
  );
}

export default App;
