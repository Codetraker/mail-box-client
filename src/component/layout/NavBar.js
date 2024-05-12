import { useState } from 'react';
import './NavBar.css';
import { Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';


const NavBar = () =>{
    const [isLogIn, setIsLogIn] = useState(true);


    return (
        <>
           <Navbar className="nav shadow" data-bs-theme="dark">
            <IconButton className='ms-3'>
                <ReorderIcon sx={{ fontSize: 25 }} style={{color:'white'}}/>
            </IconButton>
                <Container>
                    <Navbar.Brand className='brandName'>MailBox.com</Navbar.Brand>
                    <Container className='ms-5'>
                        <Row>
                            <Col sm={9}>
                                <Nav className="me-auto">
                                    <div className='d-flex ms-5 searchBar'>
                                        <IconButton><SearchIcon style={{color:'rgb(223, 223, 223)'}}/></IconButton>
                                        <input type='text' placeholder='Search mail'/>
                                        <IconButton><ExpandMoreIcon style={{color:'rgb(223, 223, 223)'}}/></IconButton>
                                    </div>
                                </Nav>
                            </Col>
                            <Col>
                                hdsgugfyg
                            </Col>
                        </Row>
                    </Container>
                </Container>
           </Navbar>
        </>
    );
};
export default NavBar;

{/*  */}
    // <Nav>
//        {isLogIn &&<Button variant="outline-danger" size='sm' style={{fontWeight:'bolder',border:'2px solid'}}>LogOut</Button>}
//        {!isLogIn &&<Button variant="outline-success" size='sm' style={{fontWeight:'bolder',border:'2px solid yellow'}}>LogIn</Button>}
//     </Nav>