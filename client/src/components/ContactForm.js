import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card,Button } from 'react-bootstrap'
import axios from 'axios'


const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { FirstName, LastName, email, message } = e.target.elements
    let conFom = {
      FirstName: FirstName.value,
      LasName: LastName.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)

    axios.post('',conFom)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="form-group">
      <Card style={{background: '#1A237E', color: 'white',margin:'20px'}}>
        <Card.Body>
          <Card.Title>
            <h3>Contact Us</h3>
          </Card.Title>
        </Card.Body>
      </Card>

      <Card style={{background: '#E8EAF6'}}>
      <form className='ma' onSubmit={onSubmit}>
          <div class="form-group">
            <div className="mb-3">
              <label className="form-label" htmlFor="first name">
                First name
              </label>
              <input className="form-control" type="text" id="first name" required />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="lastname">
                Last name 
              </label>
              <input className="form-control" type="text" id="last name" required />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>
          </div>

        <div className='form-group'>
          <div className="mb-3" >
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
        </div>
        <Button  type="submit" style={{background: '#1A237E', color: 'white'}}>
          {formStatus}
        </Button>
      </form>
      </Card>
    </div>
  )
}
export default ContactForm