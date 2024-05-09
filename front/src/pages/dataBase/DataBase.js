import React from 'react';
import { NavLink } from "react-router-dom";
import HeaderAdmin from '../../components/headerAdmin/headerAdmin';
import dataBase from './DataBase.module.css';

import databaseIcon from "./photo/database.png";
import requestIcon from "./photo/application.png";
import analyticsIcon from "./photo/analytics.png";
import reportIcon from "./photo/report.png";
import tourIcon from "./photo/travel.png";

import search from "./../../photo/search.png"

const DataBase = () => {
  return (
    <div>
      <HeaderAdmin/>
      <div className={dataBase.containerDataBase}>
        <aside className={dataBase.sidebar}>
          <nav>
            <ul>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={databaseIcon}/> 
                  <p className={dataBase.menuCurrent}>База данных</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={requestIcon}/>
                  <p className={dataBase.menu}>Заявки</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={analyticsIcon}/>
                  <p className={dataBase.menu}>Аналитика</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={reportIcon}/>
                  <p className={dataBase.menu}>Отчет</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={tourIcon}/>
                  <p className={dataBase.menu}>Туры</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main className={dataBase.content}>
          <div className={dataBase.search}>
            <input type="text" placeholder="Введите ФИО клиента"/>
          </div>
          <section className={dataBase.data}>
            <table className={dataBase.tableDataBase}>
              <thead>
              <tr>
                <th class={dataBase.th_content}><div>ID</div></th>
                <th class={dataBase.th_content}><div>Клиент</div></th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>Зинковская Ефросиния Викторовна</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Иванов Иван Иванович</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Петров Петр Петрович</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
 
export default DataBase;
