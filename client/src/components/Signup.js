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
<<<<<<< HEAD
import Row from "react-bootstrap/Row"
=======
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
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
<<<<<<< HEAD
        firstName: '',
        lastName: '',
=======
        first_name: '',
        last_name: '',
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
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
<<<<<<< HEAD
      }) => (
        <Form noValidate onSubmit={handleSubmit} >
         
            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik01">

              <Form.Label column sm="2">First name</Form.Label>
              <Col sm="10">
=======
      
        submitForm
      } ) => (
       
          
        <Form noValidate onSubmit={handleSubmit}  className='form'>
          <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
          <div className='div'>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
              <Form.Control
                type="text"
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                isValid={touched.first_name && !errors.first_name}
                isInvalid={!!errors.first_name}
              />
<<<<<<< HEAD
              </Col>
             
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
=======
              <Form.Control.Feedback>{errors.first_name}</Form.Control.Feedback>
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
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
             

<<<<<<< HEAD
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>


            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormikUsername">
             
              <Form.Label column sm="2">Username</Form.Label>
             
              <Col sm="10">
=======
              <Form.Control.Feedback type="invalid">{errors.last_name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
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
<<<<<<< HEAD
         
          <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik01">
              <Form.Label column sm="2">Email</Form.Label>
              <Col sm="10">  <Form.Control
=======
          
          
          <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <Form.Control
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
                type="email"
                name="email_address"
                value={values.email_address}
                onChange={handleChange}
<<<<<<< HEAD
                isValid={touched.email && !errors.email}
              /></Col>
            
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik01">
              <Form.Label column sm="2">password</Form.Label>
              <Col sm="10"><Form.Control
=======
                isValid={touched.email_address && !errors.email_address}
                isInvalid={!!errors.email_address}
              />
               <Form.Control.Feedback type="invalid">
                  {errors.email_address}
                </Form.Control.Feedback>
             
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik04">
              <Form.Label>password</Form.Label>
              <Form.Control
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
<<<<<<< HEAD
              /></Col>
              
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 mt-3" controlId="validationFormik01">
              <Form.Label column sm="2">phone number</Form.Label>
              <Col sm="10">
=======
                isInvalid={!!errors.password}
              />
               <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
            
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationFormik05">
              <Form.Label>phone number</Form.Label>
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
              <Form.Control
                type="tel"
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
                isValid={touched.phone_number && !errors.phone_number}
                isInvalid={!!errors.phone_number}
              />
<<<<<<< HEAD
              </Col>
             
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          
          <Form.Group as={Row} className="mb-3 mt-3">
=======
              <Form.Control.Feedback>{errors.phone_number}</Form.Control.Feedback>
            </Form.Group>
           
          
          
          {/* <Form.Group className="mb-3">
>>>>>>> d06434cbb024e6cec0ac7a60250ab212b8fb0415
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
