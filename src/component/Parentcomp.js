import React, { useState } from 'react'
import Headerchild from './Headerchild'
import './../assets/style.css'
import EdSidebar from './EdSidebar'
import Calender from './Calender';
import Mytask from './Mytask';
import Comingsoon from './Comingsoon';
import task from './../assets/icons/task.png';
import come from './../assets/icons/comsoon.png';
import calendar from './../assets/icons/calender.png';

import { unstable_batchedUpdates } from 'react-dom';
import MyClasses from './MyClasses';
import MyTeames from './MyTeames';
import MySchools from './MySchools';
import MyResources from './MyResources';
// import bootstrap from 'bootstrap'


function Parentcomp() {
  // const[isShow,setIsShow]=useState(false)
  // const ChangeData=(item)=>{
  //     setIsShow(item)
  //     // console.log(isShow);
  // }
  const [sidebar, setSidebar] = useState(false);


  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="edmaindive">
        <Headerchild sidebar={sidebar}
          showSidebar={showSidebar} />
        <EdSidebar sidebar={sidebar}
          showSidebar={showSidebar} />
      </div>
      <nav className="rigthnav-bar">
        {
          sidebar ?
            (
              <ul className="navright-items-active">
                <Calender />
                <Mytask />
                <Comingsoon />
              </ul>
            )

            :
            (
              <ul className="nav-right-menu-items">
                <a href="/"><li className="Calender-li">
                  <img src={calendar} className="iEdCalendar" />
                </li></a>
                <a href="/"> <li className="Task-li">
                  <img src={task} className="iEdTasks" />
                </li></a>
                <a href="/"> <li className="ComingSoon-li">
                  <img src={come} className="iEdComingSoon" />
                </li></a>
              </ul>
            )

        }

      </nav>
      <div className="Charts">
        <MyClasses sidebar={sidebar}
          showSidebar={showSidebar}
        />
        <MyTeames sidebar={sidebar}
          showSidebar={showSidebar}
        />

      </div>
      <div className="Charts1">
        <MySchools sidebar={sidebar}
          showSidebar={showSidebar}
        />
        <MyResources sidebar={sidebar}
          showSidebar={showSidebar}
        />
      </div>


    </>
  )
}

export default Parentcomp
