import React from 'react'
import '../App.css'
import { Card, Button, } from 'react-bootstrap'
import { Link }from "react-router-dom"
import LatestOrders from './LatestOrders'
import courier7 from '../images/courier7.jpeg'

const AccountCards = () => {
  return (
    <div className='about-us'>
      <Card style={{background: '#1A237E', color: 'white'}}>
        <Card.Body>
          <Card.Title>
            <h3>My Account</h3>
          </Card.Title>
        </Card.Body>
      </Card>
    <div class="col d-flex justify-content-center">
      <Card className='mb-3' style={{ width: '20rem',background:'#C5CAE9' }} variant= "light">
        <Card.Body>
        <Card.Img variant="top" src='' />
          <Card.Title >
            <h4>My orders</h4>
          </Card.Title>
          <img src={require('../images/courier7.jpeg').default}  alt=''/>
        <img src= {courier7} alt='' width={200} height={200} />
          <Card.Text>
          <p>Click here to see the orders you have made </p>
          </Card.Text>
         <Link to='/myordersform' ><Button variant="info">Orders</Button></Link>
        </Card.Body>
      </Card>

        <Card className='mb-3' style={{ width: '20rem', background:'#E8EAF6' }}>
          <Card.Body>
            <Card.Title style={{color : '#473352'}}>
              <h4>Adress Book</h4>
            </Card.Title>
            <Card.Text>
            <p>Click here to view the address book </p>
            </Card.Text>
            <Button variant="info">Adress Book</Button>
          </Card.Body>
        </Card>
        
        <Card className='mb-3' style={{ width: '20rem', background:'#C5CAE9' }}>
          <Card.Body>
            <Card.Title style={{color : '#473352'}}>
              <h4>Profile Settings</h4>
            </Card.Title>
            <Card.Text>
            <p>Click here to update profile </p>
            </Card.Text>
            <Button variant="info">Update profile</Button>
          </Card.Body>
        </Card>
        
        <Card className='mb-3' style={{ width: '20rem', background:'#E8EAF6' }}>
          <Card.Body>
            <Card.Title style={{color : '#473352'}}>
              <h4>Contact Us</h4>
            </Card.Title>
            <Card.Text>
            <p>Click here to contact us</p>
            </Card.Text>
            <Link to='/contactus' ><Button variant="info">Contact Us</Button></Link>
          </Card.Body>
        </Card>
      </div>
      <LatestOrders/>
    </div>
  )
}

export default AccountCards
