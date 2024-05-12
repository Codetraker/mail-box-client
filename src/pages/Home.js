import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../component/layout/NavBar";
import SideBar from "../component/layout/SideBar";
import './Home.css';
import { useState } from "react";

const Home = () =>{
    const [displaySidebar, setDisplaySidebar] = useState(true);
    return (
        <>
            <NavBar />
            <div className={displaySidebar?"layout_with_slidebar":"layout_without_slidebar"}>
                <Col className="left_layout">
                    <SideBar/>
                </Col>
                <Col className="middle_layout">Middle</Col>
                <Col className="right_layout">Right</Col>
            </div>
        </>
    );
}
export default Home;

    // <div className="layout">
    //     <div className="left_layout">
    //         {/* <SideBar />  */}
    //     </div>
    //     <div className="middle_layout">
    //         <h1>Middle</h1>
    //     </div>
    //     <div className="right_layout">
    //         <label>right</label>
    //     </div>
    // </div>