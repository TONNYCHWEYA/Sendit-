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
import Row from "react-bootstrap/Row"
import { Formik } from "formik"
import * as yup from 'yup';
import React from 'react';



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
         
            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik01">

              <Form.Label column sm="2">First name</Form.Label>
              <Col sm="10">
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              </Col>
             
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik02">
              <Form.Label column sm="2">Last name</Form.Label>
              <Col sm="10">
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />
              </Col>
             

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormikUsername">
             
              <Form.Label column sm="2">Username</Form.Label>
             
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Username"
                 
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                </Col>
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
             
            </Form.Group>
         
          <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik01">
              <Form.Label column sm="2">Email</Form.Label>
              <Col sm="10">  <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              /></Col>
            
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik01">
              <Form.Label column sm="2">password</Form.Label>
              <Col sm="10"><Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              /></Col>
              
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik01">
              <Form.Label column sm="2">phone number</Form.Label>
              <Col sm="10">
              <Form.Control
                type="phonenumber"
                name="phonenumber"
                value={values.phonenumber}
                onChange={handleChange}
                isValid={touched.phonenumber && !errors.phonenumber}
              />
              </Col>
             
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          
          <Form.Group as={Row} className="mb-3 mt-3">
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
