import './App.css';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import MyAccount from './components/MyAccount';
import MyOrdersForm from './components/MyOrdersForm';


function App() {
  return (
    <div className="App">
      <AboutUs/>
      <MyAccount/>
      <MyOrdersForm/>
      <ContactForm/>
    </div>
  );
}

export default App;
