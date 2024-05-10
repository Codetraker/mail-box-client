import { Button, Col, Row, Container, Card, FloatingLabel, Form, NavLink } from 'react-bootstrap';
import './Auth.css';
import { useRef, useState } from 'react';

const AuthComponent = () =>{
  const [valid, setValid] = useState("validated");
  const validationProps = valid==="" ? "":(valid==="validated" ? { isValid: true } : { isInvalid: true });
  
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center mt-5 mb-5'>
          <Col className='col-5'>
            <Card className='shadow-lg p-2'>
              <Card.Header style={{border:'0',fontSize: 'x-large',fontWeight: 'bold', backgroundImage:'linear-gradient(to right, #836FFF , #15F5BA)', color:'#F0F3FF'}} className='d-flex justify-content-center'>SignUp</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className='mb-3'>
                    <FloatingLabel controlId="floatingInput" label="Enter Email address">
                      <Form.Control type="email" placeholder="name@example.com" required {...validationProps} />
                    </FloatingLabel>
                    
                  </Form.Group>
                  <div className='invalid-feedback'>Invalid Email</div>
                  <Form.Group className='mb-3'>
                    <FloatingLabel controlId="floatingPassword" label="Enter Password">
                      <Form.Control type="password" placeholder="Password123" required />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                      <Form.Control type="password" placeholder="Password123" required />
                    </FloatingLabel>
                  </Form.Group>
                  <div className='d-grid mb-3'>
                    <button className='btnSubmit rounded' type='submit'>Sign Up</button>
                  </div>
                </Form>
                <div className='d-flex justify-content-center mb-3'>
                  <NavLink to="/"><label className='link'>Already have an account? Login</label></NavLink>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AuthComponent;
