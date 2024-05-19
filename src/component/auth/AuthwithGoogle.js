import { Button, Col, Row, Container, Card, FloatingLabel, Form, NavLink } from 'react-bootstrap';
import './Auth.css';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { userSliceAction } from '../../store/userSlice';

const AuthwithGoogle = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    auth.signInWithPopup(provider).then((user)=>{
      console.log("User Data =",user);
      dispatch(userSliceAction.signIn({
        displayName: user.displayName,
        photoUrl: user.photoURL,
        email : user.email
      }))
    }).catch(error=>{
      alert(error);
    })
  };
  return (
    <>
      <Container>
        <Row className='d-flex justify-content-center mt-5 mb-5'>
          <Col className='col-5'>
            <Card className='shadow-lg p-2'>
              <Card.Header style={{border:'0',fontSize: 'x-large',fontWeight: 'bold', backgroundImage:'linear-gradient(to right, #836FFF , #15F5BA)', color:'#F0F3FF'}} className='d-flex justify-content-center'>
                LogIn
              </Card.Header>
              <Card.Body>
                <div className='d-flex justify-content-center mt-3 mb-5'>
                    <h2 className='lginWithGoogle'>LogIn With Google</h2>
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <Button className='btnSubmit rounded' onClick={loginHandler}>Login</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AuthwithGoogle