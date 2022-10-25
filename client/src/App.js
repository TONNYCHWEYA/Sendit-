import './App.css';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import MyAccount from './components/MyAccount';
import UpdateProfile from './components/UpdateProfile';
import MyOrdersForm from './components/MyOrdersFrom'

function App() {
  return (
    <div className="App">
      <AboutUs/>
      <ContactForm/>
      <MyAccount/>
      <MyOrdersForm/>
    </div>
  );
}

export default App;
