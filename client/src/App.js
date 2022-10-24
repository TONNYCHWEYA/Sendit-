
import './App.css';
import Login from './components/Login';
import React from 'react';
import Navb from './components/Navb';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navb />
     <Signup />
    </div>
  );
}

export default App;
