import { NavLink } from "react-router-dom";
import HeaderAdmin from '../../components/headerAdmin/headerAdmin';
import SelectedUser from "../../components/headerAdmin/selectedUser/selectedUser";

import dataBase from './DataBase.module.css';
import databaseIcon from "./photo/database.png";
import requestIcon from "./photo/application.png";
import analyticsIcon from "./photo/analytics.png";
import reportIcon from "./photo/report.png";
import tourIcon from "./photo/travel.png";
import up from "./photo/up.png";
import down from "./photo/down.png";
import searchIcon from "./photo/search2.png";
import reloadIcon from "./photo/reload.png";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataBase = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:8000/user/allUsers');
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

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/user/search', { 
        name: searchTerm,
        surname: searchTerm,
        patronymic: searchTerm,
        phone: searchTerm,
        email: searchTerm,
      });
      setUsers(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchEnter = async (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsVisible(true); 
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a.id - b.id;
    } else {
      return b.id - a.id;
    }
  });

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  }

  return (
    <div>
      <HeaderAdmin />
      <div className={dataBase.containerDataBase}>
        <aside className={dataBase.sidebar}>
          <nav>
            <ul>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={databaseIcon} />
                  <p className={dataBase.menuCurrent}>База данных</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={requestIcon} />
                  <p className={dataBase.menu}>Заявки</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={analyticsIcon} />
                  <p className={dataBase.menu}>Аналитика</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={reportIcon} />
                  <p className={dataBase.menu}>Отчет</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={tourIcon} />
                  <p className={dataBase.menu}>Туры</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main className={dataBase.content}>
          <div className={dataBase.searchAndUserInfo}>
            <div className={dataBase.search}>
              <img 
                src={searchIcon} 
                alt="Search" 
                onClick={handleSearch}
              />
              <input 
                type="text" 
                placeholder="Введите ФИО клиента"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchEnter}
              />
              <img 
                className={dataBase.reloadIcon} 
                src={reloadIcon} 
                alt="Reload" 
                onClick={handleReload} 
              />
            </div>
            {isVisible && <SelectedUser user={selectedUser} dataBase={dataBase} setIsVisible={setIsVisible} />}
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
                  <tr key={user.id} onClick={() => handleUserClick(user)}>
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
