import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card,Button } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      Lastname: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    this.setState({FirstName: '',Lastname: '', email: '', message: ''})
  }
  render() {
    return(
      <div className="App">
        <Card style={{background: '#1A237E', color: 'white',margin:'20px'}}>
        <Card.Body>
          <Card.Title>
            <h3>Contact Us</h3>
          </Card.Title>
        </Card.Body>
      </Card>

      <Card style={{background: '#E8EAF6', margin:'20px'}}>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="Firstname">First Name</label>
              <input type="text" className="form-control" id="name" value={this.state.FirstName} onChange={this.onFirstNameChange.bind(this)} required/>
          </div>
          <div className="form-group">
              <label htmlFor="LastName">Last Name</label>
              <input type="text" className="form-control" id="Last Name" value={this.state.LastName} onChange={this.onLastNameChange.bind(this)} required/>
          </div>
          <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required/>
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required/>
          </div>
          
          <Button type="submit" style={{background: '#1A237E', color: 'white'}}>
            Submit
          </Button>
        </form>
        </Card>
      </div>
    );
  }
  onFirstNameChange(event) {
	  this.setState({FirstName: event.target.value})
  }
  onLastNameChange(event) {
	  this.setState({LastName: event.target.value})
  }
  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }
  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}
export default App;