import { IconButton } from '@mui/material';
import './MailList.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const MailList = () => {
  return (
    <div className='emailListBody'>

      <div className='emailListBody_left'>
        <IconButton><CheckBoxOutlineBlankIcon/></IconButton>
        <IconButton><StarBorderIcon/></IconButton>
        <p><b>IBM Careers</b></p>
      </div>

      <div className='emailListBody_middle'>
        <p><b>Subject - </b>This is message body</p>
      </div>
      <div className='emailListBody_right'>
        <p>2:27PM May 14</p>
      </div>
    </div>
  )
}

export default MailList;