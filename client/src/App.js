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


function App() {
  return (
    <div className="App">
      <Navb />
     <Signup />
      <ContactForm />
      <AboutUs/>

      <Routes>
          <Route path="/about">
            <AboutUs/>
          </Route>
          <Route path="/contactus">
            <ContactForm />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/sendaparcel">
            <Sendaparcel />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Routes>

    </div>
  )
}
export default App