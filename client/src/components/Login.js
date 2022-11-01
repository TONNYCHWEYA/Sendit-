import React from 'react';
import { Button, Form, Col, Row, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import styled from "styled-components"
const Style = styled.div`
 margin: 40px;
padding: 50px
 .button{
  margin-top: 30px;
 }
 
`;

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
    fetch("http://127.0.0.1:3000/sign_in", {
      method: "POST",
      // credentials: 'include',
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
    <Style>
      <h1>Login</h1>
     
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
      <p className="message" >Not yet registered click <Link to={"/signup"}><Button>here</Button></Link> to signup</p>
      <Button variant="primary" type="submit" className='button'>
        Login
      </Button>
      </Form>
     
    </Style>
  )
}

export default Login