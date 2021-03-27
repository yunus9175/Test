import React,{useState} from 'react'
import myteam from './../assets/image/myteam.png';
import {Doughnut} from 'react-chartjs-2'
import '../assets/EDCharts.css'
import '../assets/myteamschild.css'
import classdropUp from './../assets/icons/class-dropUp.png'
import classdropDown from './../assets/icons/class-dropDown.png'
import { TeamDropdown } from './TeamDropdown'
import checkedradio from './../assets/icons/radio-checked.png'


function MyTeames(props) {
    const [dropdown, setdropdown] = useState(true)
    const[isdisable,setisdisable]=useState(true);
    const[ischecked,setischecked]=useState('');
    const handleradio=()=>{
        setisdisable(false)
    }
    const handleclr=()=>{
        setischecked('')
    }
    const data={
        datasets:[
            {
                backgroundColor:['#A796EB','#51047B'],
                data:[75,15]
            }
        ]
    }
    const data1={
        datasets:[
            {
                backgroundColor:['#FF8F27','#F28080'],
                data:[75,35]
            }
        ]
    }
    const data2={
        datasets:[
            {
                backgroundColor:['#F5D114','#E07CD0'],
                data:[75,45]
            }
        ]
    }
    return (
        <>
            <div className={!props.sidebar ? "expandteame-wrapper" : "myteame-wrapper"}>
                <ul className="myteam-position">
                    <li className="myteam-items">
                        <span className="myteam-head">
                            <img src={myteam} />
                            <span className="myteamtext1">My Teames</span>
                            <button className="myteamtext2" onClick={() => setdropdown(!dropdown)}>My Super Teame 01  {dropdown ?<img src={classdropUp}/>: <img src={classdropDown} />}</button>
                            {!dropdown?
                            <ul className={props.sidebar ?"team-drop-down-compress":"team-dropdown-main"}>
                                {
                                    TeamDropdown.map((item) => {
                                        return(
                                            
                                         <li key={item.id} className="teamdropdownlist-item">
                                             <label>
                                             <input type="radio"id={item.id} value={item.val} name={item.name} checked={ischecked===item.val} onClick={()=>{setischecked(item.val)}} className="teamdrop-radio"/>
                                             <img src={checkedradio} className="myteams-checked-radio"/>
                                             <span className={item.class}>{item.name}</span>
                                             </label>
                                             </li>
                                        )
                                        }
                                    )
                                }
                                <li className="teamdrop-footer"><span className={!ischecked?"team-clr":"team-clr-active"} onClick={handleclr}>Clear</span><span className="team-view-select"><button disabled={ischecked} className={!ischecked?null:"teamviewbtn"}>View Selected</button></span></li>
                            </ul>:null
}

                            <span className="myteamtext3">LEARN MORE</span>
                        </span>

                    </li>

                </ul>
                <div className="doughnut-warpper">
                    <span className="class-text1">
                      <a href="#">Most Recent Assessments</a>  
                    </span>
                    <span className="class-text2">
                        Master Overview:March 22, 2921
                    </span>
                    <div className={props.sidebar?"doughnut-container":"doughnut-container-expand"}>
                    <div className="doughnut1">
                        <Doughnut data={data}width={190} />
                        <h1 className={!props.sidebar ?"sample":"sampletxt1"}>Sample</h1>
                        <h1 className={!props.sidebar ?"sample1":"sampletxt2"}>Assessment 01</h1>
                        
                    </div>
                    <div className="doughnut2">
                    <Doughnut data={data1} width={190}/>
                    <h1 className={!props.sidebar ?"sample":"sampletxt1"}>Sample</h1>
                        <h1 className={!props.sidebar ?"sample1":"sampletxt2"}>Assessment 01</h1>
                      

                    </div>
                    <div className="doughnut3">
                    <Doughnut data={data2} width={190}/>
                    <h1 className={!props.sidebar ?"sample":"sampletxt1"}>Sample</h1>
                        <h1 className={!props.sidebar ?"sample1":"sampletxt2"}>Assessment 01</h1>
                    </div>
                    </div>

                </div>
                <div className="ED-myteam-buttons">
                        <div className="myteam-button1">
                            <li className="myteambtn1"><span style={{    marginLeft: '7px'}}><img src={require( "./../assets/icons/myteambtn1.png" ).default}  /></span><span className="myteamtxt1"> Standartd Planning</span><span ><img src={require( './../assets/icons/myteam-arrow.svg' ).default} style={{float:'right'}}/></span></li>
                        </div>
                        <div className="myteam-button2">
                        <li className='myteambtn2'><span style={{    marginLeft: '7px'}}><img src={require( './../assets/icons/myteambtn2.png' ).default} /></span><span className="myteamtxt2"> PLC Minutes</span><span ><img src={require( './../assets/icons/myteam-arrow.svg' ).default} style={{float:'right'}}/></span></li>

                        </div>
                    </div>
                    <div className="ED-myteam-buttons1">
                        <div className="myteam-button3">
                            <li className="myteambtn3"><span style={{    marginLeft: '7px'}}><img src={require( './../assets/icons/myteambtn3.png' ).default}/></span><span className="myteamtxt3"> Reports</span><span ><img src={require( './../assets/icons/myteam-arrow.svg' ).default} style={{float:'right'}}/></span></li>
                        </div>
                        <div className="myteam-button4">
                        <li className="myteambtn4 "><span style={{    marginLeft: '7px'}}><img src={require( './../assets/icons/myteambtn4.png' ).default}/></span><span className="myteamtxt4"> Calendar</span><span ><img src={require( './../assets/icons/myteam-arrow.svg' ).default} style={{float:'right'}}/></span></li>

                        </div>
                    </div>
            </div>
        </>
    )
}

export default MyTeames
