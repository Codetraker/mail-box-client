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
import { useDispatch, useSelector } from 'react-redux';
import { composerDisplayAction } from '../../../store/composerDisplaySlice';
import { sidebarDisplayAction } from '../../../store/sidebarDisplaySlice';

const SideBar = (props) => {
  const dispatch = useDispatch();
  const sidebarSize = useSelector((state)=>state.sidebarVisible.sidebarIsVisible);
  
  const composeOpenHandler = () =>{
    dispatch(composerDisplayAction.openComposer());
  };

  const expand = useSelector((state)=>state.sidebarVisible.sidebarExpand);

  const expandHandler = () =>{
    dispatch(sidebarDisplayAction.changeSidebarExpand());
  };

  return (
    <div className="sidebar"> 
        {sidebarSize && <Button startIcon={<CreateIcon/>} className='composeBtn' onClick={composeOpenHandler}>Compose</Button>}
        {!sidebarSize && <IconButton className='composeBtn_small' onClick={composeOpenHandler}><CreateIcon/></IconButton>}
        <div>
          <SidebarOption title='Inbox' Icon={InboxIcon} active={true}/>
          <SidebarOption title='Starred' Icon={StarOutlineIcon}/>
          <SidebarOption title='Snoozed' Icon={AccessTimeIcon} />
          <SidebarOption title='Sent' Icon={SendIcon}/>
          <SidebarOption title='Drafts' Icon={InsertDriveFileOutlinedIcon} />
          {expand && <SidebarOption title='Important' Icon={LabelImportantIcon} />}
          {expand && <SidebarOption title='Chats' Icon={ChatOutlinedIcon} />}
          {expand && <SidebarOption title='Schedule' Icon={ScheduleSendOutlinedIcon} />}
          {expand && <SidebarOption title='All Mail' Icon={AllInboxIcon} />}
          {expand && <SidebarOption title='Spam' Icon={InfoOutlinedIcon} />}
          {expand && <SidebarOption title='Trash' Icon={DeleteIcon} />}
          {
          !expand ? (<SidebarOption title='More' Icon={ExpandMoreOutlinedIcon} onExpand={expandHandler} />)
            :(<SidebarOption title='Less' Icon={ExpandLessIcon} onExpand={expandHandler} />)
          }
        </div>
    </div>
  )
}

export default SideBar;