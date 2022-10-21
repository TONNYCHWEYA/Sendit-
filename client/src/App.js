import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactForm from './components/ContactForm'
import AboutUs from './components/AboutUs'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <div className="App">
      <ContactForm />
      <AboutUs/>

    </div>
  )
}
export default App