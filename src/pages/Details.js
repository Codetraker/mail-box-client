import { Col } from "react-bootstrap";
import { IconButton } from '@mui/material';
import NavBar from "../component/layout/NavBar/NavBar";
import SideBar from "../component/layout/SideBar/SideBar";
import './Home.css';
import './Details.css';
import Compose from "../component/layout/WriteMail/Compose";
import { useSelector } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { useNavigate } from "react-router-dom";


const Home = () =>{
    const isVisible = useSelector((state)=>state.composerVisible.composerIsVisible);
    const displaySidebar = useSelector((state) => state.sidebarVisible.sidebarIsVisible);
    const mailDataImport = useSelector((state) =>state.openMailData.mailData);

    const navigate = useNavigate();
    const backHandler = () =>{
        navigate('/');
    }

    return (
        <>
            <NavBar />
            
            <div className={displaySidebar?"layout_with_slidebar":"layout_without_slidebar"}>
                <Col className="left_layout">
                    <SideBar />
                </Col>
                <Col className="middle_layout">
                    <div className="mailAreaTopBar">
                        <div className="detailMain">
                            <IconButton><ArrowBackIcon onClick={backHandler}/></IconButton>
                            <IconButton><ArchiveOutlinedIcon /></IconButton>
                            <IconButton><ReportGmailerrorredOutlinedIcon /></IconButton>
                            <IconButton><DeleteOutlinedIcon /></IconButton>
                            <IconButton><MarkEmailUnreadOutlinedIcon /></IconButton>
                            <IconButton><AccessTimeOutlinedIcon /></IconButton>
                            <IconButton><AddTaskOutlinedIcon /></IconButton>
                            <IconButton><DriveFileMoveOutlinedIcon /></IconButton>
                            <IconButton><LabelOutlinedIcon /></IconButton>
                            <IconButton><MoreVertIcon /></IconButton>
                        </div>
                    </div>
                    <div className="mailArea">
                        <div className="email_header">
                            <div className="email_header_left">
                                <h3>{mailDataImport.subject}</h3>
                            </div>
                            <div className="email_header_right">
                                <IconButton><LocalPrintshopOutlinedIcon /></IconButton>
                                <IconButton><OpenInNewOutlinedIcon /></IconButton>
                            </div>
                        </div>
                        <div className="boxSenderInfo">
                            <div className="senderInfo">
                                <div className="senderInfo_left">
                                    <IconButton><AccountCircleIcon /></IconButton>
                                    <label>{mailDataImport.name}</label>
                                    <span>{mailDataImport.name}</span>
                                </div>
                                <div className="senderInfo_right">
                                    <span>{mailDataImport.time}</span>
                                    <IconButton><StarBorderOutlinedIcon /></IconButton>
                                    <IconButton><InsertEmoticonIcon /></IconButton>
                                    <IconButton><ReplyOutlinedIcon /></IconButton>
                                    <IconButton><MoreVertIcon /></IconButton>
                                </div>
                            </div>
                            <div className="detailbody">
                                <p>T{mailDataImport.message}</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="right_layout">Right</Col>
            </div>

            {isVisible && <Compose />}
        </>
    );
}
export default Home;
