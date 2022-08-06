import react from "react";
import style from './Header.module.css';
import searchLogo from '../../Assets/magnifying-glass-solid.svg';
import notificationLogo from '../../Assets/bell-regular.svg';


const Header = ()=>{
    
    return(
     <div className={style.header}>
            <div><h1 className={style.over}>Overview</h1></div>
            <div className={style.wrapper}>
                <div className={style.searchContainer}>
                    <input type="text" name="" placeholder="Search" className={style.searchInput} />
                    <div className={style.search} ><img src={searchLogo} alt="" /></div>
                </div>
                <div className={style.notification} >
                    <img src={notificationLogo} alt="" />
                </div>
                <div>
                <button className={style.btn}>Share Insight</button>
                </div>
            </div>
     </div>
    )
}

export default Header;