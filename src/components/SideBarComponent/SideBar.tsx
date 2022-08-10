import react, {useState} from 'react';
import style from './Sidebar.module.css';
import {SideBarLinks} from './SideBarLinks';
import tableColumns from '../../Assets/table-columns-solid.svg';
import chartLine from '../../Assets/chart-line-solid.svg';
import customersLogo from '../../Assets/user-group-solid.svg';
import calenderLogo from '../../Assets/calendar-days-solid.svg';
import supportLogo from '../../Assets/circle-question-regular.svg';
import settingLogo from '../../Assets/gear-solid.svg';
import profileImage from '../../Assets/img.jpeg';
import logoutLogo from '../../Assets/arrow-right-from-bracket-solid.svg';


const Sidebar = ()=>{ 
   
    return(
            <div className={style.sidebar}>
                    <div className={style.profileContainer}>
                        <div className={style.pic}>
                            <img src={profileImage}/>
                        </div>
                        <div className={style.profile}>
                            <h6 className={style.name}>Angela Grey</h6>
                            <p className={style.email}>angela@gmail.com</p>
                        </div>
                    </div>
                    <div className={style.links}>
                        <SideBarLinks img={tableColumns} text='Overview'/>
                        <SideBarLinks img={chartLine} text='Analytics'/>
                        <SideBarLinks img={customersLogo} text='Customers'/>
                        <SideBarLinks img={calenderLogo} text='Calender'/>
                        <SideBarLinks img={supportLogo} text='Support'/>
                        <SideBarLinks img={settingLogo} text='Settings'/>
                    </div>
                    <div className={style.Logout}>
                        <SideBarLinks img={logoutLogo} text='Logout'/>
                    </div>
            </div>
    )
}

export default Sidebar;