import React from 'react'
import myschool from './../assets/image/myschool.png';
import '../assets/EDCharts.css'
import { HorizontalBar } from 'react-chartjs-2';

function MySchools(props) {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#E07CD0',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 0]
            }
        ]
    };
    return (
        <>
            <div className={!props.sidebar ? "expandschool-wrapper" : "myschool-wrapper"}>
                <ul className="myschool-position">
                    <li className="myschool-items">
                        <span className="myschool-head">
                            <img src={myschool} style={{ marginTop: '-6px' }} />
                            <span className="myschooltext1">My Schools</span>
                            <span className="myschooltext2"></span>
                            <span className="myschooltext3">LEARN MORE</span>
                        </span>

                    </li>

                </ul>
                <span id="school-highlight">Mastery Highlights</span>

                <div className="horizantal-wrapper">
                    <div className="horizantal-container">
                        <div className="horizantal-bar">
                            <HorizontalBar data={data}  />
                        </div>
                    </div>
                </div>
                <div className="ED-myschool-buttons1">
                        <div className="myschool-button3">
                            <li className="myschoolbtn3"><span style={{    marginLeft: '7px'}}><img src={require( './../assets/icons/myschoolbtn1.png' ).default}/></span><span className="myschooltxt3"> Reports</span><span ><img src={require( './../assets/icons/myschool-arrow.png' ).default} style={{float:'right'}}/></span></li>
                        </div>
                        <div className="myschool-button4">
                        <li className="myschoolbtn4 "><span style={{    marginLeft: '7px'}}><img src={require( './../assets/icons/myschoolbtn2.png' ).default}/></span><span className="myschooltxt4"> Calendar</span><span ><img src={require( './../assets/icons/myschool-arrow.png' ).default} style={{float:'right'}}/></span></li>

                        </div>
                    </div>

            </div>
        </>
    )
}

export default MySchools
