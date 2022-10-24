import React from 'react'
import '../App.css'
import { Card, Carousel, Button } from 'react-bootstrap'

const AccountCards = () => {
  return (
    <div className='about-us'>
      <Card>
        <Card.Body>
          <Card.Title>
            My Account
          </Card.Title>
        </Card.Body>
      </Card>
    <div class="col d-flex justify-content-center">
      <Card className='mb-3' style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title style={{color : '#473352'}}>
            <h4>My orders</h4>
          </Card.Title>
          <Card.Text>
          <p>Click here to see the orders you have made </p>
          </Card.Text>
          <Button variant= "secondary">Orders</Button>
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
          <Button variant= "secondary">Adress Book</Button>
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
          <Button variant= "secondary">Update profile</Button>
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
          <Button variant= "secondary">Help</Button>
        </Card.Body>
      </Card>
    </div>
      <div>
        <Carousel>
          <Carousel.Item>
            
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default AccountCards
