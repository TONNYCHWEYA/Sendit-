import React from 'react'
import '../App.css'
import { Card, } from 'react-bootstrap'
import courier1 from '../images/courier1.jpg'
import courier4 from '../images/courier4.jpeg'
import courier5 from '../images/courier5.jpg'
import courier6 from '../images/courier6.jpeg'
import courier7 from '../images/courier7.jpeg'
import courier8 from '../images/courier8.jpeg'
import courier9 from '../images/courier9.jpeg'
import courier11 from '../images/courier11.jpeg'
import courier12 from '../images/courier12.jpeg'
import courier13 from '../images/courier13.jpeg'



const AboutUs = () => {
  return (
    <div className='about-us'>
      <Card style={{background: '#1A237E', color: 'white', margin:'20px'}}>
        <Card.Body>
          <Card.Title>
            <h3>About Us</h3>
          </Card.Title>
        </Card.Body>
      </Card>
      <div class="col d-flex justify-content-center">
        <Card className='mb-3' style={{ width: '50rem', background:'#C5CAE9', margin:'20px'}}>
          <Card.Body>
            <Card.Title>
              Our Mission
            </Card.Title>
            <Card.Text>
            <p>To ensure adequate universal and competitive postal and courier services through the setting and enforcement of service standards and promotion of policies that will enhance innovation, efficiency and accountability in service delivery</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='mb-3' style={{ width: '50rem', background:'#E8EAF6', margin:'20px' }}>
          <Card.Body>
            <Card.Title style={{color : '#000'}}>
              Our Vision
            </Card.Title>
            <Card.Text>
            <p>Committed to providing first-class messenger services to its customers at reasonable rates on a consistent basis.</p>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card className='mb-3' style={{ width: '50rem', background:'#C5CAE9', margin:'20px' }}>
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
        
        <Card className='mb-3' style={{ width: '50rem', background:'#E8EAF6',margin:'20px' }}>
          <Card.Img src=''/>
          <Card.Body>
            <Card.Title >
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
      <div className='about-us'>
        <Card style={{background: '#1A237E', color: 'white',margin:'20px'}}>
          <Card.Body>
            <Card.Title>
              <h3>Our Photos</h3>
              <p>These are photos of some of our staff and customers</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div class="col d-flex justify-content-center">
        <Card className='mb-3' style={{ width: '18rem', margin:'20px'}}>
        <img src={require('../images/courier1.jpg').default}  alt=''/>
        <img src= {courier1} alt='' width={400} height={400} />
        </Card>

        <Card className='mb-3' style={{ width: '18rem', margin:'20px' }}>
        <img src={require('../images/courier4.jpeg').default}  alt=''/>
        <img src= {courier4} alt='' width={400} height={400} />
        </Card>

        <Card className='mb-3' style={{ width: '18rem', margin:'20px' }}>
        <img src={require('../images/courier5.jpg').default}  alt=''/>
        <img src= {courier5} alt='' width={400} height={400} />
        </Card>

        <Card className='mb-3' style={{ width: '18rem', margin:'20px' }}>
        <img src={require('../images/courier7.jpeg').default}  alt=''/>
        <img src= {courier7} alt='' width={400} height={400} />
        </Card>

        <Card className='mb-3' style={{ width: '18rem', margin:'20px' }}>
        <img src={require('../images/courier6.jpeg').default}  alt=''/>
        <img src= {courier6} alt='' width={400} height={400} />
        </Card>
      </div>
      <div class="col d-flex justify-content-center">
        <Card className='mb-3' style={{ width: '18rem',margin:'20px' }}>
        <img src={require('../images/courier8.jpeg').default}  alt=''/>
        <img src= {courier8} alt='' width={400} height={400} />
        </Card>

        <Card className='mb-3' style={{ width: '18rem', margin:'20px' }}>
        <img src={require('../images/courier9.jpeg').default}  alt=''/>
        <img src= {courier9} alt='' width={400} height={400} />
        </Card>

        <Card className='mb-3' style={{ width: '18rem', margin:'20px' }}>
        <img src={require('../images/courier11.jpeg').default}  alt=''/>
        <img src= {courier11} alt='' width={400} height={400} />
        </Card>

        <Card className='mb-3' style={{ width: '18rem', margin:'20px' }}>
        <img src={require('../images/courier12.jpeg').default}  alt=''/>
        <img src= {courier12} alt='' width={400} height={400} />
        </Card>

        <Card className='mb-3' style={{ width: '18rem', margin:'20px' }}>
        <img src={require('../images/courier13.jpeg').default}  alt=''/>
        <img src= {courier13} alt='' width={400} height={400} />
        </Card>
      </div>
    </div>
  )
}

export default AboutUs
