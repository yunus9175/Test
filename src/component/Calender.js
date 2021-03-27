import React, { useState } from 'react'
import '../assets/Calendar.css';
import calendar from './../assets/icons/calender.png';
import Calendar from 'react-calendar';
import '../assets/rightNav.css'

function Calender() {
const [value, onChange] = useState(new Date());

    return (
        <>
            

           
                    <li className="edcalendar">
                        <span className="calendarhead">
                            <img src={calendar} alt="this is calendar" />
                            <span className="calheadtext">Calender</span>
                        </span>
                    </li>
                    <li className="mycalender">
                            <Calendar
                                onChange={onChange}
                                value={value}
                            />
                    </li>
                  

               
        </>
    )
}

export default Calender
