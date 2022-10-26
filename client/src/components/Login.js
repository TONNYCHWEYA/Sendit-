import React from 'react';
import { Button, Form, Col, Row, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function Login() {

  const [values, setValues] = useState({
    username: "",
    password: "",
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const [error, setError] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    fetch("", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((r) => {
      if (r.ok) {
         navigate("/");
      } else {
        r.json().then((err) => setError(err.message));
      }
    })
  }
  return (
    <div>
      <Container>
      <Form onSubmit={handleSubmit}>
      <p className='error'>{ error}</p>
      <Form.Group as={Row} className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Label column sm="2">Username</Form.Label>
        <Col sm="10">
        <Form.Control type="text" placeholder="username" name='username' onChange={handleChange} required size="sm" />
        </Col>
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
        <Form.Label column sm="2">Password</Form.Label>
        <Col sm="10">
        <Form.Control type="password" placeholder="Password" name='password' onChange={handleChange} required size="sm" />
        </Col>
      </Form.Group>
      <p className="message" >Not yet registered click <Link to={"/signup"}>here</Link> to signup</p>
      <Button variant="primary" type="submit">
        Login
      </Button>
      </Form>
      </Container>
    </div>
  )
}

export default Login