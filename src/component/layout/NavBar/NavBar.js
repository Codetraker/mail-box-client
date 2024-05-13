import { useState } from 'react';
import './NavBar.css';
import { Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import ReorderIcon from '@mui/icons-material/Reorder';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton, Avatar } from '@mui/material';
import { red } from '@mui/material/colors';


const NavBar = (props) =>{
    
    return (
        <>
           <Navbar className="nav shadow" data-bs-theme="dark">
            <IconButton className='ms-3'>
                <ReorderIcon sx={{ fontSize: 25 }} style={{color:'white'}} onClick={props.onDisplaySide}/>
            </IconButton>
                <Container>
                    <Navbar.Brand className='brandName'>MailBox.com</Navbar.Brand>
                    <Container className='ms-5 pe-0'>
                        <Row>
                            <Col sm={9}>
                                <Nav className="me-auto">
                                    <div className='d-flex ms-5 searchBar'>
                                        <IconButton><SearchIcon style={{color:'rgb(223, 223, 223)'}}/></IconButton>
                                        <input type='text' placeholder='Search mail'/>
                                        <IconButton><TuneIcon style={{color:'white'}}/></IconButton>
                                    </div>
                                </Nav>
                            </Col>
                            <Col>
                                <div className='d-flex align-items-center justify-content-end gap-2'>
                                    <IconButton><HelpOutlineIcon style={{color:'white'}}/></IconButton>
                                    <IconButton><SettingsIcon style={{color:'white'}}/></IconButton>
                                    <IconButton><AppsIcon style={{color:'white'}}/></IconButton>
                                    <Avatar src='' sx={{ bgcolor: red[500], width: 28, height: 28}}>S</Avatar>
                                </div>
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