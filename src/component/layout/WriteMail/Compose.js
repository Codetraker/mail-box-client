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
import { useDispatch } from 'react-redux';
import { composerDisplayAction } from '../../../store/composerDisplaySlice';
import firebase from 'firebase/compat/app';
import { db } from '../../../firebase';

const Compose = () => {
    const [to, setTo] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        if(to===""){
            return alert("You can't empty the To section.")
        }
        if(subject===""){
            return alert("You can't empty the Subject section.")
        }
        if(message===""){
            return alert("You can't empty the Message section.")
        }
        db.collection("emails").add({
            to:to,
            subject:subject,
            message:message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        });

        alert("Email sent successfully");
        setTo("");
        setSubject("");
        setMessage("");
        dispatch(composerDisplayAction.closeComposer());
        setMaximize(false);
        setMinimize(false);
    };

    const toChangeHandler = (e) =>{
        setTo(e.target.value);
    };
    const subjectChangeHandler = (e) =>{
        setSubject(e.target.value);
    };
    const messageChangeHandler = (e) =>{
        setMessage(e.target.value);
    };

    const [maximize, setMaximize] = useState(false);
    const [minimize, setMinimize] = useState(false);

    const dispatch = useDispatch();
    const composeCloseHandler = () =>{
        dispatch(composerDisplayAction.closeComposer());
        setMaximize(false);
        setMinimize(false);
    };
    
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
                        <div className='backDrop' onClick={composeCloseHandler}></div>
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
                                    <IconButton onClick={composeCloseHandler}><CloseIcon/></IconButton>
                                </div>
                            </div>
                            {!minimize && (
                            <>
                            <form onSubmit={submitHandler}>
                                <div className='body'>
                                    <div className='bodyForm'>
                                        <input type='email' placeholder='Recipients' value={to} onChange={toChangeHandler}/>
                                        <input type='text' placeholder='Subject' value={subject} onChange={subjectChangeHandler}/>
                                        <textarea onChange={messageChangeHandler}>{message}</textarea>
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
                            </form>
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
                        <IconButton><CloseIcon onClick={composeCloseHandler}/></IconButton>
                    </div>
                </div>
                {!minimize && (
                <>
                <form onSubmit={submitHandler}>
                    <div className='body'>
                        <div className='bodyForm'>
                            <input type='email' placeholder='Recipients' value={to} onChange={toChangeHandler}/>
                            <input type='text' placeholder='Subject' value={subject} onChange={subjectChangeHandler}/>
                            <textarea onChange={messageChangeHandler}>{message}</textarea>
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
                </form>
                </>
                )}
            </div>
            </>
          )
    };
  
};

export default Compose;