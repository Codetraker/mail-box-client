import ReactDOM from 'react-dom';
import { IconButton } from '@mui/material';
import './Compose.css';
import MinimizeIcon from '@mui/icons-material/Minimize';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import LockClockOutlinedIcon from '@mui/icons-material/LockClockOutlined';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { useState } from 'react';


const Compose = () => {
    const [maximize, setMaximize] = useState(false);
    const [minimize, setMinimize] = useState(false);
    
    const minimizeHandler = () =>{
        setMinimize(!minimize);
        setMaximize(false);
    };
    const maximizeHandler = () =>{
        setMinimize(false);
        setMaximize(!maximize);
    };

    if(maximize){
        return (
            <>
                {ReactDOM.createPortal(
                   <>
                        <div className='backDrop'></div>
                   </>,
                   document.getElementById('backdrop-root')
                )}
                {ReactDOM.createPortal(
                    <>
                       <div className={minimize?'compose_minimize':'compose_maximize'}>
                            <div className='header'>
                                <div className='header_left'>
                                    <span>New Message</span>
                                </div>
                                <div className='header_right'>
                                    <IconButton onClick={minimizeHandler}><MinimizeIcon/></IconButton>
                                    <IconButton onClick={()=>{setMinimize(false);setMaximize(false)}}><OpenInFullIcon/></IconButton>
                                    <IconButton><CloseIcon/></IconButton>
                                </div>
                            </div>
                            {!minimize && (
                            <>
                                <div className='body'>
                                    <div className='bodyForm'>
                                        <input type='email' placeholder='Recipients'/>
                                        <input type='text' placeholder='Subject'/>
                                        <textarea />
                                    </div>
                                </div>
                                <div className='footer'>
                                    <div className='footer_left'>
                                        <button type='submit' className='send'>
                                            Send <ArrowDropDownIcon/>
                                        </button>
                                        <IconButton><FormatColorTextIcon /></IconButton>
                                        <IconButton><AttachFileIcon /></IconButton>
                                        <IconButton><LinkIcon /></IconButton>
                                        <IconButton><InsertEmoticonIcon /></IconButton>
                                        <IconButton><AddToDriveIcon /></IconButton>
                                        <IconButton><ImageOutlinedIcon /></IconButton>
                                        <IconButton><LockClockOutlinedIcon /></IconButton>
                                        <IconButton><DriveFileRenameOutlineIcon /></IconButton>
                                        <IconButton><MoreVertIcon /></IconButton>
                                    </div>
                                    <div className='footer_right'>
                                        <IconButton><DeleteOutlineIcon /></IconButton>
                                    </div>
                                </div>
                            </>
                            )}
                        </div> 
                    </>,
                    document.getElementById('overlay-root')
                )}
            </>
        );
    }else{
        return (
            <>
            <div className={minimize?'compose_minimize':'compose'}>
                <div className='header'>
                    <div className='header_left'>
                        <span>New Message</span>
                    </div>
                    <div className='header_right'>
                        <IconButton onClick={minimizeHandler}><MinimizeIcon/></IconButton>
                        <IconButton onClick={maximizeHandler}><OpenInFullIcon/></IconButton>
                        <IconButton><CloseIcon/></IconButton>
                    </div>
                </div>
                {!minimize && (
                <>
                    <div className='body'>
                        <div className='bodyForm'>
                            <input type='email' placeholder='Recipients'/>
                            <input type='text' placeholder='Subject'/>
                            <textarea />
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='footer_left'>
                            <button type='submit' className='send'>
                                Send <ArrowDropDownIcon/>
                            </button>
                            <IconButton><FormatColorTextIcon /></IconButton>
                            <IconButton><AttachFileIcon /></IconButton>
                            <IconButton><LinkIcon /></IconButton>
                            <IconButton><InsertEmoticonIcon /></IconButton>
                            <IconButton><AddToDriveIcon /></IconButton>
                            <IconButton><ImageOutlinedIcon /></IconButton>
                            <IconButton><LockClockOutlinedIcon /></IconButton>
                            <IconButton><DriveFileRenameOutlineIcon /></IconButton>
                            <IconButton><MoreVertIcon /></IconButton>
                        </div>
                        <div className='footer_right'>
                            <IconButton><DeleteOutlineIcon /></IconButton>
                        </div>
                    </div>
                </>
                )}
            </div>
            </>
          )
    };
  
};

export default Compose;