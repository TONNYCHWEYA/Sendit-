import React from 'react';
import { Button, Form, Col, Row, Container} from 'react-bootstrap';

function Login() {
  return (
    <div>
      <Container>
      <Form>
      <Form.Group as={Row} className="mb-3 mt-3" controlId="formBasicEmail">
        <Form.Label column sm="2">Email address</Form.Label>
        <Col sm="10">
        <Form.Control type="email" placeholder="Enter email" size="sm" />
        </Col>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
        <Form.Label column sm="2">Password</Form.Label>
        <Col sm="10">
        <Form.Control type="password" placeholder="Password" size="sm" />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox" as={Row}>
        <Col>
        <Form.Check type="checkbox" label="Check me out" />
        </Col>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      </Container>
    </div>
  )
}

export default Login