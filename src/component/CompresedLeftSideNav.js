import React from 'react'
import '../assets/style.css';
import '../assets/EDSidebar.css'
import '../assets/rightNav.css'
import '../assets/CompSideNav.css'
import EDuser from './../assets/icons/user Icon.png';
import down from './../assets/icons/down.png';
import logout from './../assets/icons/EDlogout.png';
import upload from './../assets/image/upload.png';
import { EDnavbarData } from './EDnavbarData';

function CompresedLeftSideNav() {
    return (
        <>
            <nav className="compressleft-nav-bar">
                <ul className="compresed-nav-list">
                    <span className="compressed-EDuser"><img alt="EDuser" className="img-circle " src={EDuser} alt="Cinque Terre" width="56" height="56" /><span className="ED-downarrow"><img alt="down" src={down} /></span></span>
                    {

                        EDnavbarData.map((editem, index) => {
                            return (
                            
                                <li key={index} className={editem.hover}>
                                    <a href="#">
                                       <span style={{marginLeft:'7px'}}>{editem.icon}</span> 
                                    </a>
                                </li>
                                
                            )
                        })}
                    <span className="compressed-upload">
                        <img alt="updload" src={upload} style={{marginLeft:'23px',marginTop:'10px'}} />
                    </span>

                    <span className="compressed-logout"><img src={logout} style={{marginLeft:'26px',marginTop:'10px'}} alt="logout" /></span>
                </ul>

            </nav>
        </>
    )
}

export default CompresedLeftSideNav
