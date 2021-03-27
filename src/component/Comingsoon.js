import React from 'react'
import '../assets/rightNav.css'
import come from './../assets/icons/comsoon.png';

function Comingsoon() {
    return (
        <>
           

                <li className="edcoming">
                    <span className="cominghead">
                        <img src={come} alt="this is coming soon" />
                        <span className="comingheadtext">Coming Soon</span>
                        <span className="comingheadtext2">20</span>
                       
                    </span>


                </li>
                <li className="edcoming1">
                    <ul style={{listStyle:'none'}}>
                        <li className="comingitem">Lorem ipsum</li>
                        <li  className="comingitem">Lorem ipsum</li>
                        <li  className="comingitem">Lorem ipsum</li>
                        <li  className="comingitem">Lorem ipsum</li>
                        <li  className="comingitem">Lorem ipsum</li>
                        <li  className="comingitem">Lorem ipsum</li>
                        <li  className="comingitem">Lorem ipsum</li>
                        <li  className="comingitemlink"><a>View All Notifications &gt;</a></li>
                    </ul>
                </li>


            

        </>
    )
}

export default Comingsoon
