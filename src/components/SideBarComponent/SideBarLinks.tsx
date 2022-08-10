import react from 'react'
import style from './SideBarLinks.module.css'

interface Props{
    img : string,
    text : string
}

export const SideBarLinks = (props : Props) => {
  return (
    <div className={style.link}>
        <div className={style.logo}>
            <img src={props.img} alt={props.text} />
        </div>
        <p className={style.p}>{props.text}</p>
    </div>
  )
}

// export default SideBarLinks;
