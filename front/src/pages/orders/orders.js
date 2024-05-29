import React from "react";
import HeaderAdmin from "../../components/headerAdmin/headerAdmin";
import SliderBar from "../../components/sliderBar/sliderBar";
import order from "./orders.module.css";
import { FaChevronRight } from 'react-icons/fa';

const orders = () => {
    return ( 
        <div classNameName={order.container}>
            <HeaderAdmin/>
            <div className={order.containerOrders}>
                <SliderBar/>
                <main className={order.content}>
                    <section className={order.data}>
                        <div className={order.tableContainer}> 
                            <table className={order.tableDataBase}>
                            <thead>
                                <tr>
                                <th className={order.th_content}><div>В обработке</div></th>
                                <th className={order.th_content}><div>Принята</div></th>
                                <th className={order.th_content}><div>Отклонена</div></th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                            </table>
                            <div className={order.application_card}>
                                <div className={order.application_header}>
                                    <div className={order.id_box}>
                                        <span className={order.id_label}>ID</span>
                                        <span className={order.divider}></span>
                                        <span className={order.id_value}>3</span>
                                    </div>
                                    <div className={order.user_info}>
                                        <div className={order.name_box}>
                                            <span className={order.id_label}>K</span>
                                            <span className={order.name}>Зинковская Ефросиния Викторовна</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={order.application_body}>
                                    <div className={order.client_info}>
                                        <div className={order.inline_container}>
                                            <div className={order.date_box}>
                                                <span className={order.date}>11.02.2024</span>
                                            </div>
                                            <div className={order.name_box}>
                                                <span className={order.id_label}>M</span>
                                                <span className={order.name}>Карпов Петр Иванович</span>
                                            </div>
                                        </div>
                                        <div className={order.phone_box}>
                                            <span className={order.phone}>+ 375 44 444 44 44</span>
                                        </div>
                                        <div className={order.phone_box}>
                                            <span className={order.phone}>qwe@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className={order.application_main}>
                                        <div className={order.application_details}>
                                            <p className={`${order.header} ${order.rectangle}`}>Откройте для себя разнообразную Восточную Африку</p>
                                            <div>
                                                <p>Руанда, Танзания и Занзибар</p>
                                                <p>Наблюдение за дикой природой</p>
                                            </div>
                                            <button className={order.nextButton}><FaChevronRight /></button>
                                        </div>
                                        <div className={order.application_actions}>
                                            <button className={order.reject}>Отклонить</button>
                                            <button className={order.accept}>Принять</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
     );
}
 
export default orders;