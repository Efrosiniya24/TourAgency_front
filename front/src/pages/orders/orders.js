import React, { useEffect, useState } from "react";
import axios from "axios";
import HeaderAdmin from "../../components/headerAdmin/headerAdmin";
import SliderBar from "../../components/sliderBar/sliderBar";
import styles from "./orders.module.css"; // Make sure to import the styles correctly
import { FaChevronRight } from 'react-icons/fa';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8000/orders/allOrders/');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    return (
        <div className={styles.container}>
            <HeaderAdmin />
            <div className={styles.containerOrders}>
                <SliderBar />
                <main className={styles.content}>
                    <section className={styles.data}>
                        <div className={styles.tableDataBase}>
                            <th className={styles.th_content}><div>В обработке</div></th>
                            <th className={styles.th_content}><div>Принята</div></th>
                            <th className={styles.th_content}><div>Отклонена</div></th>
                            <hr className={styles.lineSeparator} />
                        </div>
                        <div className={styles.application_cards}>
                            {orders.map(order => (
                                <div key={order.id} className={styles.application_card}>
                                    <div className={styles.application_header}>
                                        <div className={styles.id_box}>
                                            <span className={styles.id_label}>ID</span>
                                            <span className={styles.divider}></span>
                                            <span className={styles.id_value}>{order.id}</span>
                                        </div>
                                        <div className={styles.user_info}>
                                            <div className={styles.name_box}>
                                                <span className={styles.id_label}>K</span>
                                                <span className={styles.name}>{`${order.user.surname} ${order.user.name} ${order.user.patronymic}`}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.application_body}>
                                        <div className={styles.client_info}>
                                            <div className={styles.inline_container}>
                                                <div className={styles.date_box}>
                                                    <span className={styles.date}>{order.createdAt}</span>
                                                </div>
                                                <div className={styles.name_box}>
                                                    <span className={styles.id_label}>M</span>
                                                    <span className={styles.name}></span>
                                                </div>
                                            </div>
                                            <div className={styles.phone_box}>
                                                <span className={styles.phone}>{order.user.phone}</span>
                                            </div>
                                            <div className={styles.phone_box}>
                                                <span className={styles.phone}>{order.user.email}</span>
                                            </div>
                                            <div className={styles.inline_container}>
                                                <div className={styles.phone_box}>
                                                    <span className={styles.id_label}>Кол. чел.:</span>
                                                    <span className={styles.phone}>{order.numberOfPeople}</span>
                                                </div>
                                                <div className={styles.phone_box}>
                                                    <span className={styles.id_label}>Турагентство:</span>
                                                    <span className={styles.phone}>{order.tour.travelAgency}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.application_main}>
                                            <div className={styles.application_details}>
                                                <p className={`${styles.header} ${styles.rectangle}`}>{order.tour.name}</p>
                                                <div>
                                                    <p>{order.tour.description}</p>
                                                </div>
                                                <button className={styles.nextButton}><FaChevronRight /></button>
                                            </div>
                                            <div className={styles.application_actions}>
                                                <button className={styles.reject}>Отклонить</button>
                                                <button className={styles.accept}>Принять</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Orders;
