import React from 'react'
import '../App.css'
import { Card } from 'react-bootstrap'


const AboutUs = () => {
  return (
    <div className='about-us'>
      <Card className='mb-3'>
        <Card.Body>
          <Card.Title style={{color : '#473352'}}>
            Our Mission
          </Card.Title>
          <Card.Text>
          <p>To ensure adequate universal and competitive postal and courier services through the setting and enforcement of service standards and promotion of policies that will enhance innovation, efficiency and accountability in service delivery</p>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card.Img src=''></Card.Img>

      <Card className='mb-3'>
        <Card.Body>
          <Card.Title style={{color : '#000'}}>
            Our Vision
          </Card.Title>
          <Card.Text>
          <p>Committed to providing first-class messenger services to its customers at reasonable rates on a consistent basis.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className='mb-3'>
        <Card.Body >
          <Card.Title style={{color : '#000'}}>
            Our Values
          </Card.Title>
          <Card.Text>
          <li>Excellence and continuous improvement</li>
        <li>Integrity in every decision we make</li>
        <li>Compassion and respect for the dignity of every person</li>
        <li>A diverse, equitable, inclusive and welcoming System</li>
        <li>Collaboration throughout our System</li>
        <li>Responsiveness to the people of our communities</li>
        <li>Fiscal accountability</li>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className='mb-3'>
        <Card.Body>
          <Card.Title style={{color : '#000'}}>
            Our Purpose
          </Card.Title>
          <Card.Text>
            <li>Speed of service</li>
            <li>Quality services delivered</li>
            <li>Completeness of service from door to door</li>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AboutUs