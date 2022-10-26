import React from 'react'
import '../App.css'
import { Card, Carousel } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <div className='about-us'>
      <p> .</p>
      <p> .</p>
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>About Us</h3>
          </Card.Title>
        </Card.Body>
      </Card>
    <div class="col d-flex justify-content-center">
      <Card className='mb-3' style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title style={{color : '#473352'}}>
            Our Mission
          </Card.Title>
          <Card.Text>
          <p>To ensure adequate universal and competitive postal and courier services through the setting and enforcement of service standards and promotion of policies that will enhance innovation, efficiency and accountability in service delivery</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='mb-3' style={{ width: '50rem' }}>
        <Card.Body>
          <Card.Title style={{color : '#000'}}>
            Our Vision
          </Card.Title>
          <Card.Text>
          <p>Committed to providing first-class messenger services to its customers at reasonable rates on a consistent basis.</p>
          </Card.Text>
        </Card.Body>
      </Card>
      
      <Card className='mb-3' style={{ width: '50rem' }}>
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
      
      <Card className='mb-3' style={{ width: '50rem' }}>
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
      <div>
      <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://www.pexels.com/photo/man-in-white-button-up-shirt-delivering-packages-6868556/"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480688/pexels-photo-1480688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480687/pexels-photo-1480687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1480689/pexels-photo-1480689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      </div>
    </div>
  )
}

export default AboutUs
