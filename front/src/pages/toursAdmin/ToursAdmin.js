import React, { useState, useEffect } from 'react';
import HeaderAdmin from '../../components/headerAdmin/headerAdmin'; 
import SliderBar from '../../components/sliderBar/sliderBar';
import SelectedTour from "../../components/selectedUser/selectedUser";

import toursAdmin from './toursAdmin.module.css';
import axios from 'axios';

import searchIcon from "./photo/search2.png";
import up from "./photo/up.png";
import down from "./photo/down.png";
import reloadIcon from "./photo/reload.png";

const ToursAdmin = () => {
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTourId, setSelectedTourId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:8000/tours/allTours');
        console.log(response.data); 
        setTours(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных: ", error);
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
      const response = await axios.post('http://localhost:8000/tours/search/', { search: searchTerm }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setTours(response.data);
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

  const handleTourClick = (tour) => {
    if (tour.id === selectedTourId) {
      setIsVisible(false);
      setSelectedTourId(null);
    } else {
      setSelectedTour(tour);
      setIsVisible(true);
      setSelectedTourId(tour.id);
    }
  };

  const sortedTours = [...tours].sort((a, b) => {
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
      <HeaderAdmin/>
      <div className={toursAdmin.containerToursAdmin}>
      <SliderBar/>
      <main className={toursAdmin.content}>
      <div className={toursAdmin.searchAndUserInfo}>
            <div className={toursAdmin.search}>
              <img 
                src={searchIcon} 
                alt="Search" 
                onClick={handleSearch}
              />
              <input 
                type="text" 
                placeholder="Введите название тура, страну или город"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchEnter}
              />
              <img 
                className={toursAdmin.reloadIcon} 
                src={reloadIcon} 
                alt="Reload" 
                onClick={handleReload} 
              />
            </div>
            {isVisible && <SelectedTour user={selectedTour} dataBase={toursAdmin} setIsVisible={setIsVisible} />}
          </div>
        <section className={toursAdmin.data}>
            <div className={toursAdmin.tableContainer}> 
              {isLoading ? (
                <div>Загрузка...</div>
              ) : (
                <table className={toursAdmin.tableDataBase}>
                  <thead>
                    <tr>
                      <th className={toursAdmin.th_content}>
                        <div>ID</div>
                        <button onClick={handleSortClick} className={toursAdmin.sort_button}>
                          <img src={sortDirection === 'asc' ? up : down} alt="Sort direction" className={toursAdmin.sort_icon} /> 
                        </button>
                      </th>
                      <th className={toursAdmin.th_content}><div>Туры</div></th>
                      <th className={toursAdmin.th_content}><div>Страна</div></th>
                      <th className={toursAdmin.th_content}><div>Город</div></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedTours.map((tour) => (
                      <tr key={tour.id} onClick={() => handleTourClick(tour)}>
                        <td>{tour.id}</td>
                        <td>{tour.name}</td>
                        <td>{tour.country}</td>
                        <td>{tour.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ToursAdmin;
