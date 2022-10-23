import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='homepage'>
    <Card style={{ width: '50rem' }}>
      <Card.Img src="thrift.jpg" />
      <Card.Body>
        <Card.Title>Daysha's Donations</Card.Title>
        <Card.Text>
          Over the years, I have donated a lot of items
          to for-profit thrift stores.
          Rather than contributing to big corporations,
          I have decided to give my items away for those in need.
          with Daysha's donations,
          I am able to list my gently
          used items and while you pay for shipping.
        </Card.Text>
        <Link to='/donations'>
        <Button variant="secondary">View Donations</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  );

}

export default Home