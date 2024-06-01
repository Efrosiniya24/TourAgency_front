import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import HeaderAdmin from "../../components/headerAdmin/headerAdmin";
import SliderBar from "../../components/sliderBar/sliderBar";
import analytics from "./analytics.module.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Analytics = () => {
    const [totalUsers, setTotalUsers] = useState('');
    const [totalOrders, setTotalOrders] = useState('');
    const [processingOrders, setProcessingOrders] = useState('');
    const [acceptedOrders, setAcceptedOrders] = useState('');
    const [rejectedOrders, setRejectedOrders] = useState('');
    const [averageAge, setAverageAge] = useState('');
    const [averageAgeMale, setAverageAgeMale] = useState('');
    const [averageAgeFemale, setAverageAgeFemale] = useState('');
    const [genderData, setGenderData] = useState({ male_percentage: 0, female_percentage: 0 });
    const [activeSection, setActiveSection] = useState('clients');

    useEffect(() => {
        axios.get('http://localhost:8000/user/user-сount')
            .then(response => {
                setTotalUsers(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching total users:', error);
            });

        axios.get('http://localhost:8000/orders/order-count/')
            .then(response => {
                setTotalOrders(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching total orders:', error);
            });

        axios.get('http://localhost:8000/orders/processing-count/')
            .then(response => {
                setProcessingOrders(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching processing orders:', error);
            });

        axios.get('http://localhost:8000/orders/accepted-count/')
            .then(response => {
                setAcceptedOrders(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching accepted orders:', error);
            });

        axios.get('http://localhost:8000/orders/rejected-count/')
            .then(response => {
                setRejectedOrders(response.data.count);
            })
            .catch(error => {
                console.error('Error fetching rejected orders:', error);
            });

        axios.get('http://localhost:8000/user/average-age')
            .then(response => {
                setAverageAge(response.data.average_age);
            })
            .catch(error => {
                console.error('Error fetching average age:', error);
            });

        axios.get('http://localhost:8000/user/gender-distribution')
            .then(response => {
                setGenderData(response.data);
            })
            .catch(error => {
                console.error('Error fetching gender distribution:', error);
            });

        axios.get('http://localhost:8000/user/average-age-by-gender')
            .then(response => {
                setAverageAgeMale(response.data.average_age_male);
                setAverageAgeFemale(response.data.average_age_female);
            })
            .catch(error => {
                console.error('Error fetching average age by gender:', error);
            });
    }, []);

    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    const orderData = {
        labels: ['Обработанные', 'Принятые', 'Отклоненные'],
        datasets: [
            {
                label: 'Заявки',
                data: [processingOrders, acceptedOrders, rejectedOrders],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    return (
        <div className={analytics.AnalyticsStyle}>
            <div className={analytics.container}>
                <HeaderAdmin />
                <div className={analytics.containerOrders}>
                    <SliderBar />
                    <main className={analytics.content}>
                        <div className={analytics.first}>
                            <div className={analytics.stats_header}>
                                <div className={analytics.stat}>
                                    <h3>Всего заявок</h3>
                                    <p>{totalOrders}</p>
                                </div>
                                <div className={analytics.stat}>
                                    <h3>Всего клиентов</h3>
                                    <p>{totalUsers}</p>
                                </div>
                            </div>
                        </div>
                        <hr className={analytics.hrClass} />
                        <div className={`${analytics.filter_bar} ${analytics.flexRow}`}>
                            <div className = {analytics.filterP}>
                                <div className={analytics.dateRegionFilter}>
                                    <div className={analytics.dateFilter}>
                                        <p>С</p>
                                        <input type="date" id="start-date" value="2024-01-22" />
                                        <p>по</p>
                                        <input type="date" id="end-date" value="2024-02-13" />
                                    </div>
                                    <div className={analytics.regionFilter}>
                                        <label htmlFor="region">Регион</label>
                                        <input type="text" id="region" placeholder="Швейцария" />
                                    </div>
                                </div>
                                <button>Посмотреть статистику</button>
                            </div>
                        </div>
                        <hr className={analytics.hrClass} />
                        <div className={analytics.stats_section}>
                            <div className={analytics.tableDataBase}>
                                <th 
                                    className={`${analytics.th_content} ${activeSection === 'clients' ? analytics.active : ''}`} 
                                    onClick={() => handleSectionClick('clients')}
                                >
                                    Клиенты
                                </th>
                                <th 
                                    className={`${analytics.th_content} ${activeSection === 'orders' ? analytics.active : ''}`} 
                                    onClick={() => handleSectionClick('orders')}
                                >
                                    Заявки
                                </th>
                            </div>
                            <div className={analytics.contentSection}>
                                {activeSection === 'clients' && 
                                    <div className={analytics.clientAnalytics}>
                                        <div className={analytics.stats_header}>
                                            <div className={analytics.stat}>
                                                <h3>Средний возраст клиента</h3>
                                                <hr className={analytics.hrClass} />
                                                <p>{averageAge}</p>
                                                <h3>Средний возраст мужчины</h3>
                                                <hr className={analytics.hrClass} />
                                                <p>{averageAgeMale}</p>
                                                <h3>Средний возраст женщины</h3>
                                                <hr className={analytics.hrClass} />
                                                <p>{averageAgeFemale}</p>
                                            </div>
                                            <div className={analytics.chartContainer}>
                                                <div className={analytics.genderChart}>
                                                    <CircularProgressbar
                                                        value={genderData.male_percentage}
                                                        text={`${genderData.male_percentage.toFixed(1)}%`}
                                                        styles={buildStyles({
                                                            pathColor: "#36A2EB",
                                                            textColor: "#36A2EB",
                                                            trailColor: "#d6d6d6"
                                                        })}
                                                    />
                                                    <p>Мужчины</p>
                                                </div>
                                                <div className={analytics.genderChart}>
                                                    <CircularProgressbar
                                                        value={genderData.female_percentage}
                                                        text={`${genderData.female_percentage.toFixed(1)}%`}
                                                        styles={buildStyles({
                                                            pathColor: "#FF6384",
                                                            textColor: "#FF6384",
                                                            trailColor: "#d6d6d6"
                                                        })}
                                                    />
                                                    <p>Женщины</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {activeSection === 'orders' && 
                                    <div className={analytics.orderAnalytics}>
                                        <div className={analytics.stats_header}>
                                            <div className={analytics.stat}>
                                                <h3>Всего заявок</h3>
                                                <hr className={analytics.hrClass} />
                                                <p>{totalOrders}</p>
                                            </div>
                                            <div className={analytics.stat}>
                                                <h3>Обработанные заявки</h3>
                                                <hr className={analytics.hrClass} />
                                                <p>{processingOrders}</p>
                                            </div>
                                            <div className={analytics.stat}>
                                                <h3>Принятые заявки</h3>
                                                <hr className={analytics.hrClass} />
                                                <p>{acceptedOrders}</p>
                                            </div>
                                            <div className={analytics.stat}>
                                                <h3>Отклоненные заявки</h3>
                                                <hr className={analytics.hrClass} />
                                                <p>{rejectedOrders}</p>
                                            </div>
                                        </div>
                                        <div className={analytics.chartContainer}>
                                            <Bar data={orderData} />
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
