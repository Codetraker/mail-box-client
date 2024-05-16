import { Col } from "react-bootstrap";
import NavBar from "../component/layout/NavBar/NavBar";
import SideBar from "../component/layout/SideBar/SideBar";
import './Home.css';
import { useEffect, useState } from "react";
import TopBarMailBox from "../component/layout/MailInbox/TopBarMailBox";
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import MailList from "../component/layout/MailInbox/MailList";
import MailSection from "../component/layout/MailInbox/MailSection";
import Compose from "../component/layout/WriteMail/Compose";
import { useSelector } from "react-redux";
import { db } from "../firebase";

const Home = () =>{
    const isVisible = useSelector((state)=>state.composerVisible.composerIsVisible);
    const [displaySidebar, setDisplaySidebar] = useState(true);

    const sidebarDisplayHandler = () =>{
        setDisplaySidebar(!displaySidebar);
    };
    const [emails, setEmails] = useState([]);
    useEffect(()=>{
        db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setEmails(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        })
    },[])
    console.log(emails);
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
                            {
                                emails.map(({id,data})=>{
                                    return <MailList key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
                                })
                            }
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
