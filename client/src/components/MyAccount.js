import React, {useEffect} from 'react'
import '../App.css'
import { Card, Button, } from 'react-bootstrap'
import { Link }from "react-router-dom"
import LatestOrders from './LatestOrders'
import contact from '../images/contact.png'
import orderpic from '../images/my-order.png'

const AccountCards = ({setUser}) => {

 
  useEffect(() =>{
    let token = localStorage.getItem("token")
      if(token){
        fetch('http://127.0.0.1:3000/profile',{
          headers: { "Authorization": `Bearer ${token}`}
        })
        .then(r => r.json())
        .then(user => {
          setUser(user)
        })
      }

 // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


  return (
    <div className='about-us'>
      <Card style={{background: '#1A237E', color: 'white', margin:'20px'}}>
        <Card.Body>
          <Card.Title>
            <h3>My Account</h3>
          </Card.Title>
        </Card.Body>
      </Card>
    <div class="col d-flex justify-content-center">
      <Card className='mb-3' style={{ width: '20rem',background:'#C5CAE9',margin:'20px' }} variant= "light">
        <Card.Body>
        <Card.Img variant="top" src='' />
          <Card.Title >
            <h4>My orders</h4>
          </Card.Title>
          <img src={require('../images/my-order.png').default}  alt=''/>
          <img src= {orderpic} alt='' width={200} height={200} />
          <Card.Text>
          <p>Click here to see the orders you have made </p>
          </Card.Text>
         <Link to='/myordersform' ><Button style={{background: '#1A237E', color: 'white'}} >Orders</Button></Link>
        </Card.Body>
      </Card>

        
        
        <Card className='mb-3' style={{ width: '20rem', background:'#E8EAF6', margin:'20px'  }}>
          <Card.Body>
            <Card.Title style={{color : '#473352'}}>
              <h4>Contact Us</h4>
            </Card.Title>
            <img src={require('../images/contact.png').default}  alt=''/>
            <img src= {contact} alt='' width={200} height={200} />
            <Card.Text>
            <p>Click here to contact us</p>
            </Card.Text>
            <Link to='/contactus' ><Button style={{background: '#1A237E', color: 'white'}}>Contact Us</Button></Link>
          </Card.Body>
        </Card>
      </div>
      <LatestOrders/>
    </div>
  )
}

export default AccountCards

