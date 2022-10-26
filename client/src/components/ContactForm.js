import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


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
  }
  return (
    <div className="form-group">
      <h4 className="mb-3">Contact Us</h4>
      
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
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
        <h3>If you need help please call +254712345678</h3>
      </form>
    </div>
  )
}
export default ContactForm