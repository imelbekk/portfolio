import React, { useEffect, useState } from "react";
import styles from "../../ui/navbar/navbar.module.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";

export default function Navbar() {
  const [links,setLinks] = useState([
    {id: 1, title: 'home', path: '/'},
    {id: 2, title: 'projects', path: '/projects'},
    {id: 3, title: 'education', path: '/education'},
  ])
  const [active,setActive] = useState(1)
  const handleClick = (id) => {
    localStorage.setItem('id', id)
    setActive(id)
  }
  useEffect(()=>{
    let val = +localStorage.getItem('id')
    if(val){
      setActive(val)
    }else{
      setActive(1)
    }
  })
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_item}>
        {
          links.map((item,index)=>{
            return <li key={index}>
              <Link to={item.path} onClick={()=>handleClick(item.id)} className={active === item?.id ? styles.link : ''}>{item.title}</Link>
            </li>
          })
        }
        <span className={styles.icons}>
          <a href="https://github.com/imelbekk" target="blank">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/elbek-imomaliyev-5337382b4/" target="blank">
            <LinkedInIcon />
          </a>
          <a href="https://t.me/imomaliyev_071" target="blank">
            <TelegramIcon />
          </a>
          <a href="https://mail.google.com/mail/" target="blank">
            <EmailIcon />
          </a>
        </span>
      </ul>
    </nav>
  );
}
