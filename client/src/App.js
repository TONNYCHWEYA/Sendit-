import './App.css';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import MyAccount from './components/MyAccount';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <div className="App">
      <ContactForm/> 
      <AboutUs/>
      <MyAccount/>  
    </div>
  );
}

export default App;
