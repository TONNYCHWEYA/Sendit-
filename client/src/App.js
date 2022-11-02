import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/ContactForm'
import AboutUs from './components/AboutUs'
import Navb from './components/Navb';
import Signup from './components/Signup';
import {Routes,Route } from "react-router-dom";
import Sendaparcel from './components/Sendaparcel';
import Login from './components/Login';
import Home from './components/Home'
import React from 'react';
import MyAccount from './components/MyAccount'
import MyOrdersForm from './components/MyOrdersForm'
import Footer from './components/Footer';
//import AdminPage from './Components/AdminPage';
import Parcel from './Components/AdminPanel'

function App() {
  return (
    <div className="App">
      <Navb />
     

      <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/Adminpannel" element={<Parcel/>}/>
          
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
    </div>
  );
}

export default App;


