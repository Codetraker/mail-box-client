import { IconButton } from '@mui/material';
import './MailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
import { openMailAction } from '../../../store/openmailSlice';
import { useNavigate } from "react-router-dom";


const MailList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mailDataStore = () =>{
    dispatch(openMailAction.openMessage({
      name : props.name,
      subject : props.subject,
      message : props.message,
      time : props.time
    }))
    navigate('/detail');
  }

  return (
    <div className='emailListBody' onClick={mailDataStore}>

      <div className='emailListBody_left'>
        <IconButton><CheckBoxOutlineBlankIcon/></IconButton>
        <IconButton><StarBorderIcon/></IconButton>
        <p><b>{props.name}</b></p>
      </div>

      <div className='emailListBody_middle'>
          <p><b>{props.subject} - </b>{props.message}</p>
      </div>
      <div className='emailListBody_right'>
        <p>{props.time}</p>
      </div>
    </div>
  )
}

export default MailList;