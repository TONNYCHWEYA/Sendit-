import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'


const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { OrderDate, OrderID, From, To, CollectingDate, Status } = e.target.elements
    let conFom = {
      OrderDate: OrderDate.value,
      OrderID: OrderID.value,
      From: From.value,
      To: To.value,
      CollectingDate: CollectingDate.value,
      Status: Status.value,
    }
    console.log(conFom)
  }