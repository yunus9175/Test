import React, { useState,useEffect } from 'react'
import myclasses from './../assets/image/myclasses.png';
import classdropUp from './../assets/icons/class-dropUp.png'
import classdropDown from './../assets/icons/class-dropDown.png'
import '../assets/EDCharts.css'
import '../assets/myclasschild.css'
import { Bar } from 'react-chartjs-2'
import { ProgressBar } from 'react-bootstrap'
import { ClassDropdown } from './ClassDropdown'
import checkedradio from './../assets/icons/radio-checked.png'

function MyClasses(props) {
    const [dropdown, setdropdown] = useState(true)
    const[isdisable,setisdisable]=useState(true);
    const[arr1,setarr1]=useState([]);
    const[ischecked,setischecked]=useState('');
    const handleradio=()=>{
        setisdisable(false)
    }
    const handleclr=()=>{
        setarr1([])
    }
    const handlchange=(event)=>{
        if(event.target.checked){
            setarr1([...arr1,event.target.value])
        }
        else{
            setarr1(arr1.filter((id)=>id!==event.target.value))
        }
    }
    useEffect(() => {
        if(arr1.length===0)
        {
            setischecked('')
        }
       else{
           setischecked(arr1.join(","))
       }
       alert(`${arr1}`);
    }, [arr1])
    console.log(props.sidebar)
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#71BC4E',
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
            <div className={!props.sidebar ? "expandclasses-wrapper" : "MyClaases-wrapper"}>
                <ul className="MyClaases-position">
                    <li className="MyClaases-items">
                        <span className="MyClaases-head">
                            <img src={myclasses} />
                            <span className="MyClaasestext1">My Classes</span>
                            <button className="MyClaasestext2" onClick={() => setdropdown(!dropdown)}>ELA12 M-F3:30-3:45  {dropdown ? <img src={classdropUp} /> : <img src={classdropDown} />}
                            </button>
                            {!dropdown?
                            <ul className={props.sidebar ?"class-drop-down-compress":"class-dropdown-main"}>
                                {
                                    ClassDropdown.map((item) => {
                                        
                                        return( <li key={item.id} className="dropdownlist-item">
                                            <label>
                                            <input id={item.id} type="radio" name={item.name} value={item.data} checked={arr1.findIndex(myarr=>myarr==item.data)>-1?true:false} onChange={handlchange} className="classdrop-radio"/>
                                            <img src={checkedradio} className="myclass-checked-radio"/>
                                            <span className={item.class1}>{item.name}</span><span className="class-drop-list">{item.data}</span>
                                            </label>
                                            </li>
                                          
                                        )
                                    }
                                    )
                                }
                                <li className="drop-footer"><span className={arr1.length==0?"class-clr":"class-clr-active"} onClick={handleclr}>Clear</span><span className="class-view-select"><button disabled={arr1.length==0} className={arr1.length==0?null:"classviewbtn"}>View Selected</button></span></li>
                            </ul>:null
}
                            <span className={props.sidebar?"myclassestext3-comp":"MyClaasestext3"}>LEARN MORE</span>
                        </span>

                    </li>
                    {/* <li className="myClasses-container">
                        <ul style={{listStyle:'none'}}>
                            <li></li>
                        </ul>
                    </li> */}
                </ul>
                <div className="bar-warpper">

                    <div className="bar-container">
                        <div className={props.sidebar ? "bar1" : "bar2"}>
                            <Bar data={data}
                                width={100}
                                height={50}
                                options={{
                                    maintainAspectRatio: false
                                }} />
                        </div>

                    </div>
                    <span className="class-previous">Previous Assessment</span><span className="class-details"><a href="#">More Details &gt;</a></span>
                    <br />
                    <div className="class-progressbar">

                        <div className="progress-parents">
                            <span className="progresstext1">Sample Assessment 01</span>

                            <span className="ProgressBar1">
                               

                                <ProgressBar now={30} />

                                <span className="barpercent">30%</span><br />
                            </span>
                        </div>
                        <span className="progresstext1">Sample Assessment 01</span>
                        <ProgressBar now={40} /><span className="barpercent">40%</span> <br />
                        <span className="progresstext1">Sample Assessment 01</span>
                        <ProgressBar now={25} /><span className="barpercent">25%</span>
                    </div>

                </div>
                <div className="ED-myclass-buttons1">
                    <div className="myclass-button3">
                        <li className="myclassbtn3"><span style={{ marginLeft: '7px' }}><img src={require('./../assets/icons/myclassbtn1.png').default} /></span><span className="myclasstxt3"> Reports</span><span ><img src={require('./../assets/icons/myclass-arrow.png').default} style={{ float: 'right' }} /></span></li>
                    </div>
                    <div className="myclass-button4">
                        <li className="myclassbtn4 "><span style={{ marginLeft: '7px' }}><img src={require('./../assets/icons/myclassbtn2.png').default} /></span><span className="myclasstxt4"> Calendar</span><span ><img src={require('./../assets/icons/myclass-arrow.png').default} style={{ float: 'right' }} /></span></li>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MyClasses
