/** @format */

import react, { useState } from 'react';
import style from './Header.module.css';
import searchLogo from '../../Assets/magnifying-glass-solid.svg';
import notificationLogo from '../../Assets/bell-regular.svg';
import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from '../../components/SideBarComponent/SideBar';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      {isNavExpanded === true ? <Sidebar /> : null}
      <div className={style.header}>
        <div>
          <h1 className={style.over}>Overview</h1>
          {isNavExpanded ? <FiX
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
            className={style.navCloseIcon}
          /> : <FiMenu onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }} className={style.navOpenIcon}/>}
        </div>
        <div className={style.wrapper}>
          <div className={style.searchContainer}>
            <input
              type="search"
              name="search"
              placeholder="Search"
              className={style.searchInput}
            />
            <div className={style.search}>
              <img src={searchLogo} alt="" />
            </div>
          </div>
          <div className={style.notification}>
            <img src={notificationLogo} alt="" />
          </div>
          <div>
            <button className={style.btn}>Share Insights</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
