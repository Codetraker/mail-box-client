import { useState } from 'react';
import './NavBar.css';
import { Button, Container, Nav, Navbar} from "react-bootstrap";

const NavBar = () =>{
    const [isLogIn, setIsLogIn] = useState(true);


    return (
        <>
           <Navbar className="nav shadow" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand className='brandName'>MailBox.com</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className='d-flex ms-5'>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">About</Nav.Link>
                            <Nav.Link href="/">Contact</Nav.Link>
                        </div>
                    </Nav>
                    <Nav>
                        {isLogIn &&<Button variant="outline-danger" size='sm' style={{fontWeight:'bolder',border:'2px solid'}}>LogOut</Button>}
                        {!isLogIn &&<Button variant="outline-success" size='sm' style={{fontWeight:'bolder',border:'2px solid yellow'}}>LogIn</Button>}
                    </Nav>
                </Container>
           </Navbar>
        </>
    );
};
export default NavBar;