import { IconButton } from '@mui/material';
import './MailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const MailList = (props) => {
  return (
    <div className='emailListBody'>

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