import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';
import tourInputForm from './tourInputForm.module.css';

const TourInputForm = ({ tourData, handleChange, handleDelete, handleClose, setTours, tours }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/tours/updateTour/${tourData.id}/`, tourData);
      const updatedTour = response.data;
      setTours(tours.map(tour => tour.id === updatedTour.id ? updatedTour : tour));
      handleClose(); // Close the form after saving
    } catch (error) {
      console.error('Ошибка при обновлении тура:', error);
    }
  };

  return (
    <div className={tourInputForm.containerInput}>
      <div className={tourInputForm.table_containerInput}>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <div className={tourInputForm.border}>
                <div className={tourInputForm.closeButton} onClick={handleClose}>×</div>
                <tr>
                  <th>Название тура:</th>
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={tourData.name}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Страна:</th>
                  <td>
                    <input
                      type="text"
                      name="country"
                      value={tourData.country}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Количество дней:</th>
                  <td>
                    <input
                      type="text"
                      name="numberOfDays"
                      value={tourData.numberOfDays}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Цена:</th>
                  <td>
                    <input
                      type="text"
                      name="price"
                      value={tourData.price}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Начало тура:</th>
                  <td>
                    <input
                      type="date"
                      name="startDate"
                      value={tourData.startDate}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Конец тура:</th>
                  <td>
                    <input
                      type="date"
                      name="endDate"
                      value={tourData.endDate}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Город:</th>
                  <td>
                    <input
                      type="text"
                      name="city"
                      value={tourData.city}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Описание:</th>
                  <td>
                    <TextareaAutosize
                      name="description"
                      value={tourData.description}
                      onChange={handleChange}
                      className={tourInputForm.textarea}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Программа:</th>
                  <td>
                    <TextareaAutosize
                      name="program"
                      value={tourData.program}
                      onChange={handleChange}
                      className={tourInputForm.textarea}
                    />
                  </td>
                </tr>
                <button type="submit" className={tourInputForm.submit}>Сохранить</button>
                <button type="button" onClick={handleDelete} className={tourInputForm.delete}>Удалить</button>
              </div>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default TourInputForm;
