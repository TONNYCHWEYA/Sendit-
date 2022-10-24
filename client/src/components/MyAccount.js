import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'


const AccountCards = () => {
  return (
    <div className='account-cards'>
      <div className='"col d-flex justify-content-center"'>
        <Card style={{ width: '50rem', outerHeight: '20rem' }}>
          <Card.Img src=''/>
          <Card.Body>
            <Card.Text>
              Click here to see the orders.
            </Card.Text>
            <Link>
            <Button variant='secondary'>My Orders</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '50rem', outerHeight: '20rem' }}>
          <Card.Img/>
          <Card.Body>
            <Card.Text>
              Click here to see the Address Book.
            </Card.Text>
            <Link>
            <Button variant='secondary'>Address Book</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '50rem', outerHeight: '20rem' }}>
          <Card.Img/>
          <Card.Body>
            <Card.Text>
              Click here to change Profile Settings.
            </Card.Text>
            <Link>
            <Button variant='secondary'>Profile Settings</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );

}

export default AccountCards