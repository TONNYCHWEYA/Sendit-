import './App.css';
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
import React, {useEffect, useState} from 'react';
import MyAccount from './components/MyAccount'
import MyOrdersForm from './components/MyOrdersForm'
import Footer from './components/Footer';
import Parcel from './Components/AdminPanel';



function App() {
  const [auth, setAuth] = useState()
  const [user, setUser] =useState()

  function validator(){
    let token = localStorage.getItem("token")
    if(token){
      fetch('http://127.0.0.1:3000/profile',{
        headers: { "Authorization": `Bearer ${token}`}
      })
      .then(r => r.json())
      .then(user => {
        setUser(user)
      })
    }


  }

 
  return (
    <div className="App">
      <Navb user={user} setUser={setUser}/>
     

      <Routes>
          <Route path="/about" element={<AboutUs/>}/>
          
          <Route path="/contactus" element={<ContactForm />}/>

          <Route path="/login" element={<Login setUser={setUser} user={user}/>}/>
           
          <Route path="/signup" element={<Signup />}/>
          <Route path="/myaccount" element={<MyAccount setUser={setUser} user={user}/>}/>
            
          <Route path="/sendaparcel" element={<Sendaparcel user={user}  validator={validator} />}/>

          <Route path="/myordersform" element={<MyOrdersForm validator={validator}/>}/>
          <Route path="/Adminpannel" element={<Parcel />}/>
          
          <Route exact path="/" element={<Home auth={auth} setAuth={setAuth} />}/>
          <Route exact path="/" element={<Footer />}/>
       </Routes >
       
<Footer/>
    </div>
  );
}

export default App;


