import './App.css';
<<<<<<< HEAD
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/ContactForm'
import AboutUs from './components/AboutUs'
import Navb from './components/Navb';
import Signup from './components/Signup';
import {
 Routes,
  Route
 } from "react-router-dom";
import Sendaparcel from './components/Sendaparcel';
import Login from './components/Login';
import Home from './components/Home'
import React from 'react';
import MyAccount from './components/MyAccount'
import MyOrdersForm from './components/MyOrdersForm'
import Footer from './components/Footer';


=======
import Admin from './Components/Admin';
>>>>>>> 97a3426 (new branch)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navb />
     

      <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          
          <Route path="/contactus" element={<ContactForm />}/>

          <Route path="/login" element={<Login />}/>
           
          <Route path="/signup" element={<Signup />}/>
          <Route path="/myaccount" element={<MyAccount />}/>
            
          <Route path="/sendaparcel" element={<Sendaparcel />}/>

          <Route path="/myordersform" element={<MyOrdersForm />}/>
          
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/" element={<Footer />}/>
       </Routes >
       
<Footer/>
=======

      <Admin/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 97a3426 (new branch)
    </div>
  );
}

export default App;


