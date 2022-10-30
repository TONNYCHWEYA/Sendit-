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
import { Formik, useFormik } from "formik"
import * as yup from 'yup';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import styled from "styled-components"

const Style = styled.div`
 margin: 60px;
 .form{
  margin: 60px;
  display: flex;
  flex-direction: column;

  .div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btn{
    width: 200px;
    margin-left: 360px;
  }
 }

 
`;

const  number_regex = /\w+@\w+\.{1}[a-zA-Z]{2,}/
const schema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  username: yup.string().required("Required"),
 password: yup.string()
  .min(6, 'Password must be atleast 6 characters')
  .max(20,"Password exceeds 20 characters")
  .matches(number_regex, {message: "Please create a strong password"})
  .required("Required"),
  email:yup.string()
  .email('Email must be valid')
  .required('Email required'),
  phonenumber:yup
  .number()
  
  .required("Required"),
  isAdmin: yup.bool().oneOf([true], 'Terms must be accepted'),
});

function Signup() {

  

const navigate = useNavigate();
// const [errors, setErrors] = useState([]);
// function handleChange(e) {
//   setState({...state, [e.target.name]: e.target.value})
// }

const handleSubmit = (values, actions, e) => {
  e.preventdefault()
  console.log("submitted");
  console.log(actions);
  fetch("http://localhost:3000/signup", {
    method: "POST",
     headers: {
       "Content-Type":"application/json"
     },
  body: JSON.stringify(values)
   }).then((r) => {
   if (r.ok) {
       navigate("/login")
     } else {
      //  r.json().then((err) => setErrors(err.errors))
      }
     })

};










  return (
    
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        email_address: '',
        phone_number: '' ,
        isAdmin: false
        
       
      }}
      onChange
      
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      } ) => (
        <Style>
          
        <Form noValidate onSubmit={handleSubmit}  className='form'>
          <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
          <div className='div'>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                isValid={touched.first_name && !errors.first_name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                isValid={touched.last_name && !errors.last_name}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                
                <Form.Control
                  type="text"
                 
                 
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
          
          
          <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && errors.email}
              />
               <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik04">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
               <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik05">
              <Form.Label>phone number</Form.Label>
              <Form.Control
                type="tel"
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
                isValid={touched.phone_number && !errors.phone_number}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          
          
          <Form.Group className="mb-3">
            <Form.Check
              value={values.isAdmin}
              name="isAdmin"
            
              onChange={handleChange}
              
              
              id="validationFormik08"
            />
          </Form.Group>
          </div>

        
          <Button type="submit" className='btn'>Sign up</Button>
        </Form>
          </Style>
      )}
    </Formik>
  
  );
}

export default Signup
