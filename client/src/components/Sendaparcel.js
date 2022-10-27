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



const schema = yup.object().shape({
  RecipientName: yup.string().required(),
  Recipient_contact: yup.string().required(),
  weigth_in_kg: yup.string().required(),
  

});

function Sendaparcel() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        RecipientName: 'Mark',
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
          
            <Form.Group  controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="Recipient_Name"
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
            <Map />
          </Container>
         
          <Button type="submit">Send a parcel</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Sendaparcel