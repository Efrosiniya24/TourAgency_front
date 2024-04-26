import header from "./../../styles/header.module.css"
import index from "./index.module.css"
import video from "./beach.mp4"
import search from "./../../photo/search.png"

import { NavLink } from "react-router-dom"

const MainPageUser = () => {
    return ( 
        <div>
            <div className={header.headerMain}>
            <a href="/static" className={index.logo}>WORLD</a>
            <ul className={header.nav}>
                <li><a href="#">Главная</a></li>
                <li><NavLink to ="/aboutUs"> О нас</NavLink></li>
                <li><a href="#">Туры</a></li>
                <li><a href="#">Гостиницы</a></li>
            </ul>
            <div className={index.search_icon}>
                <img src={search} width="20" height="20"/>
            </div>
        </div>
        <div className={header.intro}>
            <div className={index.video}>
                <video className={index.video_media} src={video} autoPlay muted loop></video>
            </div>
            <div className={header.intro_text}>
                <h1 className={index.h1_index}>WORLD</h1>
                <p className={index.mainP}>Вдохновение в путешествиях</p>
                <div className={index.buttons}>
                    <a href="#">Посмотреть туры</a>
                    <NavLink to="/signIn">Войти</NavLink>
                </div>
            </div>
        </div>
    </div>
  );
}
 
export default MainPageUser;