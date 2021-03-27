import React from 'react'
import myresources from './../assets/image/myresources.png';
import myassessment from './../assets/icons/myassesment.png';
import myrubics from './../assets/icons/myrubics.png';

import '../assets/EDCharts.css'
function MyResources(props) {
    return (
        <>
            <div className={!props.sidebar?"expandresources-wrapper":"myresources-wrapper"}>
                <ul className="myresources-position">
                    <li className="myresources-items">
                        <span className="myresources-head">
                            <img src={myresources} />
                            <span className="myresourcestext1">My Resources</span>
                            <span className="myresourcestext2"></span>
                            <span className="myresourcestext3">LEARN MORE</span>
                        </span>

                    </li>
                    <div className="ED-resource-content">
                        <div className="my-assesment">
                            <li className="head-assessment"><span className="head-assessment-pic"><img src={myassessment}/></span> <span className="head-assessmenttext">My Assessments</span></li>
                            <li className="assessment1"><span className="assessment-pic"><img src={myassessment} style={{height:'12px',width:'9.58px'}}/></span> <span className="assessmenttext1">Assessments 1</span></li>
                            <li className="assessment1"><span className="assessment-pic"><img src={myassessment} style={{height:'12px',width:'9.58px'}}/></span> <span className="assessmenttext1">Assessments 2</span></li>
                            <li className="assessment1"><span className="assessment-pic"><img src={myassessment} style={{height:'12px',width:'9.58px'}}/></span> <span className="assessmenttext1">Assessments 3</span></li>
                            <li className="assessment1"><span className="assessment-pic"><img src={myassessment} style={{height:'12px',width:'9.58px'}}/></span> <span className="assessmenttext1">Assessments 4</span></li>
                            <li className="assessment1"><span className="assessment-pic"><img src={myassessment} style={{height:'12px',width:'9.58px'}}/></span> <span className="assessmenttext1">Assessments 5</span></li>
                            <li className="footer-assessment1"><span className="footer-assessmenttext1"><a href="#">View all my assessments &gt;</a></span></li>
                          
                        </div>
                        <div className="my-rubics">
                        <li className="head-rubics"><span className="head-rubics-pic"><img src={myrubics}/></span> <span className="head-rubicsttext">My Rubics</span></li>
                            <li className="rubics1"><span className="rubics-pic"><img src={myrubics} style={{height:'12px',width:'9.58px'}}/></span> <span className="rubics1text1">Rubics 1</span></li>
                            <li className="rubics1"><span className="rubics-pic"><img src={myrubics} style={{height:'12px',width:'9.58px'}}/></span> <span className="rubics1text1">Rubics 2</span></li>
                            <li className="rubics1"><span className="rubics-pic"><img src={myrubics} style={{height:'12px',width:'9.58px'}}/></span> <span className="rubics1text1">Rubics 3</span></li>
                            <li className="rubics1"><span className="rubics-pic"><img src={myrubics} style={{height:'12px',width:'9.58px'}}/></span> <span className="rubics1text1">Rubics 4</span></li>
                            <li className="rubics1"><span className="rubics-pic"><img src={myrubics} style={{height:'12px',width:'9.58px'}}/></span> <span className="rubics1text1">Rubics 5</span></li>
                            <li className="footer-rubics1"><span className="footer-rubics1text"><a href="#">View all my rubics &gt;</a></span></li>

                        </div>
                    </div>
                    <div className="ED-resource-buttons">
                        <div className="resource-button1">
                            <li className="resourcebtn1"><span style={{    marginLeft: '7px'}}><img src={require( "./../assets/icons/library.png" ).default}  /></span><span className="resourcetxt1">  Assessment Library</span><span ><img src={require( './../assets/icons/arrow-symbol.png' ).default} style={{float:'right'}}/></span></li>
                        </div>
                        <div className="resource-button2">
                        <li className='resourcebtn2'><span style={{    marginLeft: '7px'}}><img src={require( './../assets/icons/rubics-resource.png' ).default} /></span><span className="resourcetxt2">  Rubrics</span><span ><img src={require( './../assets/icons/arrow-symbol.png' ).default} style={{float:'right'}}/></span></li>

                        </div>
                    </div>
                    <div className="ED-resource-buttons1">
                        <div className="resource-button3">
                            <li className="resourcebtn3"><span style={{    marginLeft: '7px'}}><img src={require( './../assets/icons/strategy.png' ).default}/></span><span className="rubicstxt1">  Strategies</span><span ><img src={require( './../assets/icons/arrow-symbol.png' ).default} style={{float:'right'}}/></span></li>
                        </div>
                        <div className="resource-button4">
                        <li className="resourcebtn4 "><span style={{    marginLeft: '7px'}}><img src={require( './../assets/icons/Resource-upload.png' ).default}/></span><span className="rubicstxt2">  Upload Assessment</span><span ><img src={require( './../assets/icons/arrow-symbol.png' ).default} style={{float:'right'}}/></span></li>

                        </div>
                    </div>

                </ul>
            </div>

        </>
    )
}

export default MyResources
