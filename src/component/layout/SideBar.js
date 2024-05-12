import { Col, Container, Row } from 'react-bootstrap';
import CreateIcon from '@mui/icons-material/Create';
import './SideBar.css';
import { Button } from '@mui/material';
import SidebarOption from './SidebarOption';

const SideBar = () => {
  return (
    <div className="sidebar"> 
        <Button startIcon={<CreateIcon/>} className='composeBtn'>Compose</Button>
        <SidebarOption />
    </div>
  )
}

export default SideBar;