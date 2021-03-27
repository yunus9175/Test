import React, { useState } from 'react'
import '../assets/style.css';
// import '../assets/Calendar.css';
import '../assets/EDSidebar.css'
import '../assets/rightNav.css'
import EDuser from './../assets/icons/user Icon.png';
import down from './../assets/icons/down.png';
import logout from './../assets/icons/EDlogout.png';
import upload from './../assets/image/upload.png';
// import calendar from './../assets/icons/calender.png';
import task from './../assets/icons/task.png';

// import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Col, Container, Row } from "react-bootstrap";
// import { Button, Container } from "reactstrap";
import { EDnavbarData } from './EDnavbarData';
import CompresedLeftSideNav from './CompresedLeftSideNav';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
function EdSidebar(props) {
    // const [value, onChange] = useState(new Date());
    const style = {
        position: 'absolute',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '25px',
        left: '60px',
        /* identical to box height */
        fontFamily: 'Nunito',
        textTransform: 'capitalize', marginTop: '-3px'
    };
    console.log("this is expand value:", props.sidebar)

    return (
       <>
        <div className="Ed-sidbar-main">
            {props.sidebar ? (<div className="Ed-navbar">
                {/* <div>
                    <img className="img-circle " src={img} alt="Cinque Terre" width="60" height="60"/>
                    
                </div> */}
                <ul>
                    <div className='d-none d-sm-block EDsidenav' style={{ position: 'absolute', marginTop: '82px', borderBottom: '1px solid black' }}>
                        <Container className="edsidhead" style={{    height: '80px'}}>
                            <Row style={{ paddingTop: '10px'}}>
                                <Col > <img alt="EDuser" className="img-circle " src={EDuser} alt="Cinque Terre" width="56" height="56" /></Col>
                                <Col ><p style={{ marginLeft: '-15px', marginTop: '10px', fontFamily: 'Roboto', fontWeight: '400', lineHeight: '12.41px', fontSize: '15.89px' }} className="welcome">Welcome</p>
                                </Col>
                                <Col className="EDuser"><h5 style={{ marginTop: '29px', marginLeft: '-92px', fontFamily: 'Roboto', fontWeight: '500', lineHeight: '16.41px', fontSize: '15px', color: ' #545454' }} id="dumuser">Jane Doe</h5></Col>
                                <img alt="down" src={down} style={{ marginLeft: '5px', marginRight: '32px', width: '10px', height: '5px', marginTop: '30px' }} />

                            </Row>
                            <br />
                        </Container>


                        <div >
                            {

                                EDnavbarData.map((edarray, index) => {
                                    return (

                                        <div style={{ position: 'relative', marginTop: '0px', top: '0px', left: '0' }} className={edarray.CNmae}>
                                            <li key={index} className="edtextli">
                                                <a href="#">
                                                {edarray.icon}

                                                <p className="edText" style={style}>{edarray.text}</p>
                                                </a>
                                            </li>
                                        </div>
                                    )
                                })

                            }
                            <span style={{ width: '400px', height: '60px', background: '#A100FF', position: 'relative', top: '250px', left: '30px', paddingLeft: '25px', paddingRight: '30px', padding: '8px', color: 'white' }}>
                                <img alt="updload" src={upload} />   Upload Resource
                </span>
                            <span style={{ paddingLeft: '15px', marginLeft: '-151px', position: 'relative', top: '-20px' }}></span>
                            <span style={{ position: 'relative', top: '300px', paddingLeft: '30px', color: '#A100FF' }}><img src={logout} alt="logout" />  Logout</span>
                        </div>

                    </div>

                </ul>
            </div>) : <CompresedLeftSideNav/>}
          

        </div>
        </>
    )
}

export default EdSidebar
