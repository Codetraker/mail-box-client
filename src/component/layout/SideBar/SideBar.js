import { Col, Container, Row } from 'react-bootstrap';
import CreateIcon from '@mui/icons-material/Create';
import './SideBar.css';
import { Button, IconButton } from '@mui/material';
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
import { useDispatch } from 'react-redux';
import { composerDisplayAction } from '../../../store/composerDisplaySlice';

const SideBar = (props) => {
  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false);
  let sidebarSize = props.sidebarView;
  
  const expandHandler = () =>{
    setExpand(!expand);
  }
  const composeOpenHandler = () =>{
    dispatch(composerDisplayAction.openComposer());
  };

  return (
    <div className="sidebar"> 
        {sidebarSize && <Button startIcon={<CreateIcon/>} className='composeBtn' onClick={composeOpenHandler}>Compose</Button>}
        {!sidebarSize && <IconButton className='composeBtn_small' onClick={composeOpenHandler}><CreateIcon/></IconButton>}
        <div>
          <SidebarOption title='Inbox' Icon={InboxIcon} number='14' active={true} sideExtent={sidebarSize}/>
          <SidebarOption title='Starred' Icon={StarOutlineIcon} sideExtent={sidebarSize}/>
          <SidebarOption title='Snoozed' Icon={AccessTimeIcon} sideExtent={sidebarSize} />
          <SidebarOption title='Sent' Icon={SendIcon} sideExtent={sidebarSize}/>
          <SidebarOption title='Drafts' Icon={InsertDriveFileOutlinedIcon} number='2' sideExtent={sidebarSize} />
          {expand && <SidebarOption title='Important' Icon={LabelImportantIcon} sideExtent={sidebarSize} />}
          {expand && <SidebarOption title='Chats' Icon={ChatOutlinedIcon} sideExtent={sidebarSize} />}
          {expand && <SidebarOption title='Schedule' Icon={ScheduleSendOutlinedIcon} sideExtent={sidebarSize} />}
          {expand && <SidebarOption title='All Mail' Icon={AllInboxIcon} sideExtent={sidebarSize} />}
          {expand && <SidebarOption title='Spam' Icon={InfoOutlinedIcon} sideExtent={sidebarSize} />}
          {expand && <SidebarOption title='Trash' Icon={DeleteIcon} sideExtent={sidebarSize} />}
          {
          !expand ? (<SidebarOption title='More' Icon={ExpandMoreOutlinedIcon} onExpand={expandHandler} sideExtent={sidebarSize}/>)
            :(<SidebarOption title='Less' Icon={ExpandLessIcon} onExpand={expandHandler} sideExtent={sidebarSize} />)
          }
        </div>
    </div>
  )
}

export default SideBar;