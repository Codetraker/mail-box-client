import { Col, Container, Row } from 'react-bootstrap';
import CreateIcon from '@mui/icons-material/Create';
import './SideBar.css';
import { Button } from '@mui/material';
import SidebarOption from './SidebarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useState } from 'react';

const SideBar = () => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () =>{
    setExpand(!expand);
  }
  return (
    <div className="sidebar"> 
        <Button startIcon={<CreateIcon/>} className='composeBtn'>Compose</Button>
        <div>
          <SidebarOption title='Inbox' Icon={InboxIcon} number='14' active={true}/>
          <SidebarOption title='Starred' Icon={StarOutlineIcon} />
          <SidebarOption title='Snoozed' Icon={AccessTimeIcon} />
          <SidebarOption title='Sent' Icon={SendIcon} />
          <SidebarOption title='Drafts' Icon={InsertDriveFileOutlinedIcon} number='2' />
          {expand && <SidebarOption title='Important' Icon={LabelImportantIcon} />}
          {expand && <SidebarOption title='Chats' Icon={ChatOutlinedIcon} />}
          {expand && <SidebarOption title='Schedule' Icon={ScheduleSendOutlinedIcon} />}
          {expand && <SidebarOption title='All Mail' Icon={AllInboxIcon} />}
          {expand && <SidebarOption title='Spam' Icon={InfoOutlinedIcon} />}
          {expand && <SidebarOption title='Trash' Icon={DeleteIcon} />}
          {
          !expand ? (<SidebarOption title='More' Icon={ExpandMoreOutlinedIcon} onExpand={expandHandler}/>)
            :(<SidebarOption title='Less' Icon={ExpandLessIcon} onExpand={expandHandler} />)
          }
        </div>
    </div>
  )
}

export default SideBar;