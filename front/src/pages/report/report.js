import React from "react";
import axios from "axios";
import HeaderAdmin from "../../components/headerAdmin/headerAdmin";
import SliderBar from "../../components/sliderBar/sliderBar";
import reportt from "./report.png";
import report from "./report.module.css";

const Report = () => {
    const downloadReport = async () => {
        try {
            const response = await axios.get('http://localhost:8000/orders/generate_order_report/', {
                responseType: 'blob', // важный параметр для получения данных в формате Blob
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Отчет по заявкам(full).pdf'); // Имя файла
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Ошибка при скачивании отчета:", error);
        }
    };

    return ( 
        <div className={report.reportt}>
            <div className={report.container}>
                <HeaderAdmin />
                <div className={report.containerOrders}>
                    <SliderBar />
                    <main className={report.content}>
                        <div className={report.container}>
                            <div className={report.card}>
                                <img src={reportt} alt="Отчет"/>
                                <p className={report.card_p}>Отчет по заявкам</p>
                                <button onClick={downloadReport} className={report.downloadButton}>
                                    Скачать отчет
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Report;