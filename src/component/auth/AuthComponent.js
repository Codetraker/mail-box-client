import { Button, Col, Row, Container, Card, FloatingLabel, Form, NavLink } from 'react-bootstrap';
import './Auth.css';
import { useRef, useState } from 'react';

const AuthComponent = () =>{
  const [valid, setValid] = useState("validated");
  const validationProps = valid==="" ? "":(valid==="validated" ? { isValid: true } : { isInvalid: true });

  const [haveAccount, setHaveAccount] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const reEnteredPasswordInputRef = useRef();

  const submitHandler = (event) =>{
    event.preventDefault();

    const emailEntered = emailInputRef.current.value;
    const passwordEntered = passwordInputRef.current.value;
    const reEnteredPassword = reEnteredPasswordInputRef.current.value;


    console.log(emailEntered);
    console.log(passwordEntered);
    console.log(reEnteredPassword);
  };
  const changeHandler = () => {
    setHaveAccount(!haveAccount);
  };
  
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center mt-5 mb-5'>
          <Col className='col-5'>
            <Card className='shadow-lg p-2'>
              <Card.Header style={{border:'0',fontSize: 'x-large',fontWeight: 'bold', backgroundImage:'linear-gradient(to right, #836FFF , #15F5BA)', color:'#F0F3FF'}} className='d-flex justify-content-center'>
                {haveAccount?"SignUp":"LogIn"}
              </Card.Header>
              <Card.Body>
                <Form onSubmit={submitHandler}>
                  <Form.Group className='mb-3'>
                    <FloatingLabel controlId="floatingInput" label="Enter Email address">
                      <Form.Control type="email" placeholder="name@example.com" required ref={emailInputRef} />
                    </FloatingLabel>
                  </Form.Group>
                  <div className='invalid-feedback'>Invalid Email</div>
                  <Form.Group className='mb-3'>
                    <FloatingLabel controlId="floatingPassword" label="Enter Password">
                      <Form.Control type="password" placeholder="Password123" required ref={passwordInputRef} />
                    </FloatingLabel>
                  </Form.Group>
                  {haveAccount && <Form.Group className='mb-3'>
                    <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                      <Form.Control type="password" placeholder="Password123" required ref={reEnteredPasswordInputRef} />
                    </FloatingLabel>
                  </Form.Group>}
                  <div className='d-grid mb-3'>
                    <button className='btnSubmit rounded' type='submit'>{haveAccount?"Sign Up":"Log In"}</button>
                  </div>
                </Form>
                <div className='d-flex justify-content-center mb-3'>
                  <NavLink to="/"><label className='link' onClick={changeHandler}>
                    {haveAccount?"Already have an account? Login":"Have an account? Signup"}
                  </label></NavLink>
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
