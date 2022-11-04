// import React from 'react'
// import Map from './Map'
// import { Button } from 'react-bootstrap'
// function Sendaparcel() {
//   return (
//     <div>
      
//       <Map />

//       <Button>Send a parcel</Button>
//     </div>
//   )
// }

// export default Sendaparcel

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from "formik"
import * as yup from 'yup';
import Map from './Map'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect} from 'react'

import styled from "styled-components"

const Style = styled.div`
 margin: 40px;

 .button{
  margin-top: 40px;
 }
`;

const schema = yup.object().shape({
  recipient_name: yup.string().required("Required"),
  recipient_contact: yup.string().required("Required"),
  weight: yup.number().required("Required"),
 

});

function Sendaparcel({user, validator}) {

  const navigate = useNavigate()
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [to, setTo] = useState('')
  const [from, setFrom] =useState('')

  console.log(distance)

  useEffect(() => {
   validator()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  function onSubmit(values,actions){
    console.log(values)
    console.log(actions)
    const newValues = {...values, distance: distance, destination: to, from: from, order_status: 'processed', user_id: user.id}
    console.log(newValues)
    let token = localStorage.getItem("token")
            if(token){
              fetch("http://127.0.0.1:3000/parcels",{
                method: 'POST',
                headers: {'Content-Type':'application/json', 
                "Authorization": `Bearer ${token}`      
              },
                body: JSON.stringify(newValues)
              })
              .then(res => {
                if(res.ok){
                  res.json().then(console.log)
                  navigate("/myordersform")
                  }else{
                    res.json().then(e => console.log(e))
                  }
                }
              )
            }
   

  }
  return (
    <Style>
   
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        recipient_name: '',
        recipient_contact: '',
        weight: '',
       
     
       
        
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
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Receiptient Name</Form.Label>
              <Form.Control
                type="text"
                name="recipient_name"
                value={values.recipient_name}
                onChange={handleChange}
                isValid={touched.recipient_name && !errors.recipient_name}
                isInvalid={!!errors.recipient_name}
              />
              <Form.Control.Feedback>{errors.recipient_name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Recipient Contact</Form.Label>
              <Form.Control
                type="text"
                name="recipient_contact"
                value={values.recipient_contact}
                onChange={handleChange}
                isValid={touched.recipient_contact && !errors.recipient_contact}
                isInvalid={!!errors.recipient_contact}
              />

              <Form.Control.Feedback>{errors.recipient_contact}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label> weight</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="number"
                  placeholder="weight"
                 
                  name="weight"
                  value={values.weight}
                  onChange={handleChange}
                  isValid={touched.weight && !errors.weight}
                  isInvalid={!!errors.weight}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.weight}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

         

          <Container>
            <Map distance={distance} setDistance={setDistance} duration={duration} setDuration={setDuration} setTo={setTo} setFrom={setFrom}/>
          </Container>
         
          <Button type="submit" className='button'>Send a parcel</Button>
        </Form>
      )}
    </Formik>
    
    </Style>
  );
}

export default Sendaparcel