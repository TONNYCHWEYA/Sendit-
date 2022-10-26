import React from 'react'
import '../App.css'
import { Card, Button } from 'react-bootstrap'
import { Link }from "react-router-dom"
import LatestOrders from './LatestOrders'

const AccountCards = () => {
  return (
    <div className='about-us'>
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>My Account</h3>
          </Card.Title>
        </Card.Body>
      </Card>
    <div class="col d-flex justify-content-center">
      <Card className='mb-3' style={{ width: '20rem' }} variant= "light">
        <Card.Body>
          <Card.Title style={{color : '#473352'}}>
            <h4>My orders</h4>
          </Card.Title>
          <Card.Text>
          <p>Click here to see the orders you have made </p>
          </Card.Text>
         <Link to='/myordersform' ><Button variant="info">Orders</Button></Link>
        </Card.Body>
      </Card>

        <Card className='mb-3' style={{ width: '20rem' }}>
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
        
        <Card className='mb-3' style={{ width: '20rem' }}>
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
        
        <Card className='mb-3' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title style={{color : '#473352'}}>
              <h4>Help</h4>
            </Card.Title>
            <Card.Text>
            <p>Click here to contact the help desk</p>
            </Card.Text>
            <Button variant="info">Help</Button>
          </Card.Body>
        </Card>
      </div>
      <LatestOrders/>
    </div>
  )
}

export default AccountCards
