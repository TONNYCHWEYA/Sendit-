// import React from 'react'

// function Signup() {
//   return (
//     <div>
//       <h1>Welcome to Sendit</h1>
//       <p>Create an account or login</p>
//       <form>
//         <input type="text" placeholder="First name"/>
//         <input type="text" placeholder="Last name"/>
//         <input type="email" placeholder="email"/>
//         <input type="tel" placeholder="phone number"/>
//         <input type="text" placeholder="username"/>
//         <input type="password" placeholder="password"/>
//         <input type="checkbox">I agree to sendit terms of service</input>
//         <input type="submit" value="SIGN UP"/>
//       </form> 
//     </div>
//   )
// }

// export default Signup

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from "formik"
import * as yup from 'yup';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";



const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
 password: yup.string()
  .min(6, 'Password must be atleast 6 characters')
  .required(),
  email:yup.string()
  .email('Email must be valid')
  .required('Email required'),
  phonenumber: yup.string()
  .max(14, 'Phone number must be 14 characters')
  .required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function Signup() {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    email: '',
    phonenumber: '' ,
    
    terms: false,
  })

const navigate = useNavigate();
const [errors, setErrors] = useState([]);
function onChange(e) {
  setState({...state, [e.target.name]: e.target.value})
}

function HandleSubmit(e) {
  e.preventDefault()
fetch("", {
  method: "POST",
  headers: {
    "Content-Type":"application/json"
  },
  body: JSON.stringify(state)
}).then((r) => {
  if (r.ok) {
      navigate("/login")
  } else {
    r.json().then((err) => setErrors(err.errors))
    }
  })
}

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        phonenumber: '' ,
        
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit} >
          <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                
                <Form.Control
                  type="text"
                  placeholder="Username"
                 
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>phone number</Form.Label>
              <Form.Control
                type="phonenumber"
                name="phonenumber"
                value={values.phonenumber}
                onChange={handleChange}
                isValid={touched.phonenumber && !errors.phonenumber}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>

        
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Signup
