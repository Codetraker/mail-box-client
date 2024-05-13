import { IconButton } from '@mui/material';
import './TopBarMailBox.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';

const TopBarMailBox = () => {
  return (
    <div className='main'>
        <div className='left'>
            <IconButton>
                <CheckBoxOutlineBlankIcon />
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RefreshIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton> 
        </div>
        <div className='right'>
            <p>1-50 of 13,171</p>
            <IconButton>
                <KeyboardArrowLeftIcon/>
            </IconButton>
            <IconButton>
                <KeyboardArrowRightIcon />
            </IconButton>
            <IconButton>
                <KeyboardIcon />
                <ArrowDropDownIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default TopBarMailBox