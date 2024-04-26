import React from 'react';
import mainAdmin from './mainAdmin.module.css';
import header from "./../../styles/header.module.css";

import travel from "./photo/travel.png";
import report from "./photo/report.png";
import database from "./photo/database.png";
import application from "./photo/application.png";
import analytic from "./photo/analytic.png";

import { NavLink } from "react-router-dom";

const MainAdmin = () => {
    return ( 
        <div className={mainAdmin.mainAdmin}>
            <header className={header.headerNotMain}>
                <a href="/static" className={mainAdmin.logo}>WORLD</a>
            </header>
            <main>
                <div className={mainAdmin.text}>
                    <h2>Добро пожаловать!</h2>
                    <p className={mainAdmin.text_p}>Приятной работы</p>
                </div>
                <div className={mainAdmin.container}>
                    <div className={mainAdmin.top_row}>
                        <div className={mainAdmin.card}>
                            <img src={analytic}/>
                            <p className={mainAdmin.card_p}>Аналитика</p>
                        </div>
                        <div className={mainAdmin.card}>
                            <img src={application}/>
                            <p className={mainAdmin.card_p}>Заявки</p>
                        </div>
                        <div className={mainAdmin.card}>
                            <img src={travel}/>
                            <p className={mainAdmin.card_p}>Туры</p>
                        </div>
                    </div>
                    <div className={mainAdmin.bottom_row}>
                        <div className={mainAdmin.card}>
                            <img src={report}/>
                            <p className={mainAdmin.card_p}>Отчет</p>
                        </div>
                        <div className={mainAdmin.card}>
                            <img src={database}/>
                            <p className={mainAdmin.card_p}>База данных</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
     );
}
 
export default MainAdmin;