import { Col } from "react-bootstrap";
import NavBar from "../component/layout/NavBar/NavBar";
import SideBar from "../component/layout/SideBar/SideBar";
import './Home.css';
import { useState } from "react";
import TopBarMailBox from "../component/layout/MailInbox/TopBarMailBox";
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MailList from "../component/layout/MailInbox/MailList";
import MailSection from "../component/layout/MailInbox/MailSection";
import Compose from "../component/layout/WriteMail/Compose";

const Home = () =>{
    const [displaySidebar, setDisplaySidebar] = useState(true);

    const sidebarDisplayHandler = () =>{
        setDisplaySidebar(!displaySidebar);
    };
    return (
        <>
            <NavBar onDisplaySide={sidebarDisplayHandler}/>
            
            <div className={displaySidebar?"layout_with_slidebar":"layout_without_slidebar"}>
                <Col className="left_layout">
                    <SideBar sidebarView={displaySidebar}/>
                </Col>
                <Col className="middle_layout">
                    <div className="mailAreaTopBar">
                        <TopBarMailBox />
                    </div>
                    <div className="mailArea">
                        <div className="mailSectionArea">
                            <MailSection Icon={InboxIcon} text="Primary" active={true}/>
                            <MailSection Icon={LocalOfferIcon} text="Promotions"/>
                            <MailSection Icon={PeopleAltOutlinedIcon} text="Social"/>
                        </div>
                        <div className="mailInbox">
                            <MailList name="IBM Careers" subject="Review your CV" message="This is a demo related to CV" time="10:07AM 14 May"/>
                            
                        </div>
                    </div>
                </Col>
                <Col className="right_layout">Right</Col>
            </div>

            <Compose />
        </>
    );
}
export default Home;
