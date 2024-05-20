import { IconButton } from '@mui/material';
import './MailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
import { openMailAction } from '../../../store/openmailSlice';
import { useNavigate } from "react-router-dom";
import { db } from '../../../firebase';


const MailList = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const markAsRead = props.markAsRead;

  const mailDataStore = () =>{
    dispatch(openMailAction.openMessage({
      id : props.id,
      name : props.name,
      from : props.from,
      photoUrl : props.photoUrl,
      subject : props.subject,
      message : props.message,
      time : props.time
    }))
    if(props.markAsRead === false){
      markEmailAsRead(props.id);
    }
    navigate('/detail');
  };

  const markEmailAsRead = async (emailId) =>{
    try{
        await db.collection("emails").doc(emailId).update({
          markAsRead : true
        });
    }catch(error){
      console.error("Error updating document: ", error);
    }
  };

  return (
    <div className={markAsRead?'emailListBody':'emailListBody emailListBodyUnRead'} onClick={mailDataStore}>

      <div className='emailListBody_left'>
        <IconButton><CheckBoxOutlineBlankIcon/></IconButton>
        <IconButton><StarBorderIcon/></IconButton>
        <p><span>{props.name}</span></p>
      </div>

      <div className='emailListBody_middle'>
          <p><span>{props.subject}</span> - {props.message}</p>
      </div>
      <div className='emailListBody_right'>
        <p><span>{props.time}</span></p>
      </div>
    </div>
  )
}

export default MailList;