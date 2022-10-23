import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'


const OrdersCard = () => {

  return (
    <div className='cards'>
    <Card style={{ width: '50rem' }}>
      <Card.Img src="" />
      <Card.Body>
        <Card.Text>
            Click here to view Orders.
        </Card.Text>
        <Link>
        <Button variant="secondary">My Orders</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '50rem' }}>
      <Card.Img src="" />
      <Card.Body>
        <Card.Text>
            Click here to view Address Book.
        </Card.Text>
        <Link>
        <Button variant="secondary">Address Book</Button>
        </Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '50rem' }}>
      <Card.Img src="" />
      <Card.Body>
        <Card.Text>
            Click here to view Profile Settings.
        </Card.Text>
        <Link>
        <Button variant="secondary">Profile Settings</Button>
        </Link>
      </Card.Body>
    </Card>
    
    </div>
  );

}

export default OrdersCard