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
import React from 'react'
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
  
   
  }
 }

 
`;



function Signup() {

  const  number_regex = /\w+@\w+\.{1}[a-zA-Z]{2,}/
const schema = yup.object().shape({
  first_name: yup.string().required("Required"),
  last_name: yup.string().required("Required"),
  username: yup.string().required("Required"),
 password: yup.string()
  .min(6, 'Password must be atleast 6 characters')
  .max(20,"Password exceeds 20 characters")
  
  .required("Required"),
  email_address: yup.string()
  .email('Email must be valid')
  .required('Email required'),
  phone_number:yup
  .number()
  
  .required("Required"),
  // isAdmin: yup.bool().oneOf([true], 'Issue admin rights'),
});

const navigate = useNavigate();


// function onSubmit(values, actions ) {

//   console.log(values)
//   console.log(actions)
  // e.preventdefault()
  // console.log("submitted");
  // console.log(actions);
 












  return (
    <Style>
    
    <Formik
      validationSchema={schema}
      
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email_address: '',
        phone_number: '' ,
        // isAdmin: false,
        
       
      }}

      onSubmit={(values, actions) => {
        // When button submits form and form is in the process of submitting, submit button is disabled
        
        console.log(values)

      //   // Simulate submitting to database, shows us values submitted, resets form
      // setTimeout(() => {
      //   alert(JSON.stringify(values, null, 2));
      //   resetForm();
      //   setSubmitting(false);
      // }, 500);

      fetch("http://[::1]:3000/sign_up", {
        method: "POST",
         headers: {
           "Content-Type":"application/json"
         },
      body: JSON.stringify(values)
       }).then((r) => {
        console.log(r)
       if (r.ok) {
           navigate("/login")
         } else {
          //  r.json().then((err) => setErrors(err.errors))
          }
         })

      
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
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                isValid={touched.first_name && !errors.first_name}
                isInvalid={!!errors.first_name}
              />
              </Col>
             
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik02">
              <Form.Label column sm="2">Last name</Form.Label>
              <Col sm="10">
              <Form.Control
                type="text"
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                isValid={touched.last_name && !errors.last_name}
                isInvalid={!!errors.last_name}
              />
              </Col>
             

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormikUsername">
             
              <Form.Label column sm="2">Username</Form.Label>
             
              <Col sm="10">
                <Form.Control
                  type="text"
                 
                 
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                  isValid={touched.username && !errors.username}
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
                name="email_address"
                value={values.email_address}
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
                type="tel"
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
                isValid={touched.phone_number && !errors.phone_number}
                isInvalid={!!errors.phone_number}
              />
              </Col>
             
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          
          <Form.Group as={Row} className="mb-3 mt-3">
            <Form.Check
              value={values.isAdmin}
              name="isAdmin"
              label= "check if admin"
              isInvalid={!!errors.isAdmin}
              feedback={errors.isAdmin}
            
              onChange={handleChange}
              
              
              id="validationFormik08"
            />
          </Form.Group> */}

          <Button type="submit" className='button'  >Sign up</Button>
          </div>

        
        </Form>
        
      )}
    </Formik>
    </Style>
  
  );
}

export default Signup
