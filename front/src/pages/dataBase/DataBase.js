
import { NavLink } from "react-router-dom";
import HeaderAdmin from '../../components/headerAdmin/headerAdmin';
import dataBase from './DataBase.module.css';

import databaseIcon from "./photo/database.png";
import requestIcon from "./photo/application.png";
import analyticsIcon from "./photo/analytics.png";
import reportIcon from "./photo/report.png";
import tourIcon from "./photo/travel.png";
import up from "./photo/up.png";
import down from "./photo/down.png";

import React, { useState, useEffect } from 'react';
import axios from 'axios'; 


const DataBase = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:8000/user/allUsers'); // Замените на URL вашего эндпоинта
        setUsers(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
 
  const handleSortClick = () => {
    setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
  };
  
  // Сортировка пользователей по ID в зависимости от sortDirection
  const sortedUsers = [...users].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }
  
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
              <th className={dataBase.th_content}>
              <div>ID</div>
                <button onClick={handleSortClick} className={dataBase.sort_button}>
                  <img src={sortDirection === 'asc' ? up : down} alt="Sort direction" className={dataBase.sort_icon} /> 
                </button>
              </th>
              <th className={dataBase.th_content}><div>Клиент</div></th>
              </tr>
              </thead>
              <tbody>
                {sortedUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.surname} {user.name} {user.patronymic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}
 
export default DataBase;
