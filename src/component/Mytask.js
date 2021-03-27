import React from 'react'
import '../assets/rightNav.css'
import task from './../assets/icons/task.png';

function Mytask() {
    return (
        <>
        

                <li className="edtask">
                    <span className="taskhead">
                        <img src={task} alt="this is task" />
                        <span className="taskheadtext">Tasks</span>
                        <span className="taskheadtext2">Today, March 16</span>
                       
                    </span>


                </li>
                <li className="edtask1">
                    <ul style={{listStyle:'none'}}>
                        <li className="taskitem">Task1 goes here</li>
                        <li  className="taskitem">Task2 goes here</li>
                        <li  className="taskitem">Task3 goes here</li>
                        <li  className="taskitem">Task4 goes here</li>
                        <li  className="taskitem">Task5 goes here</li>
                        <li  className="taskitem">Task6 goes here</li>
                        <li  className="taskitem">Task7 goes here</li>
                        <li  className="taskitemlink"><a>View All Task here &gt;</a></li>
                    </ul>
                </li>


          

        </>
    )
}

export default Mytask
