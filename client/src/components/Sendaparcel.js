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

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Formik } from "formik"
import * as yup from 'yup';
import Map from './Map'
import { Container } from 'react-bootstrap'
import { React, useState} from 'react'

import styled from "styled-components"

const Style = styled.div`
 margin: 40px;

 .button{
  margin-top: 40px;
 }
`;

const schema = yup.object().shape({
  RecipientName: yup.string().required("Required"),
  Recipient_contact: yup.string().required("Required"),
  weigth_in_kg: yup.number().required("Required"),
  

});

function Sendaparcel() {

  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  console.log(distance)

  function onSubmit(values,actions){
    console.log(values)
    console.log(actions)
    const newValues = {...values, distance: distance, duration: duration}
    console.log(newValues)
  }
  return (
    <Style>
   
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        RecipientName: '',
        Recipient_contact: '',
        weigth_in_kg: '',
     
       
        
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
                name="RecipientName"
                value={values.RecipientName}
                onChange={handleChange}
                isValid={touched.RecipientName && !errors.RecipientName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId="validationFormik02">
              <Form.Label>Recipient Contact</Form.Label>
              <Form.Control
                type="text"
                name="Recipient_contact"
                value={values.Recipient_contact}
                onChange={handleChange}
                isValid={touched.Recipient_contact && !errors.Recipient_contact}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId="validationFormikUsername">
              <Form.Label> weigth_in_kg</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="weigth_in_kg"
                 
                  name="weigth_in_kg"
                  value={values.weigth_in_kg}
                  onChange={handleChange}
                  isInvalid={touched.weigth_in_kg && !errors.weigth_in_kg}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.weigth_in_kg}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          

          <Container>
            <Map distance={distance} setDistance={setDistance} duration={duration} setDuration={setDuration}/>
          </Container>
         
          <Button type="submit" className='button'>Send a parcel</Button>
        </Form>
      )}
    </Formik>
    
    </Style>
  );
}

export default Sendaparcel;