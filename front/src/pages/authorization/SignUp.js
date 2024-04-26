import React, { useState } from 'react';
import login from './login.module.css';

import { NavLink } from "react-router-dom"

const SignUp = () => {
  // State для полей формы
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь вы можете отправить данные на сервер
    console.log('Отправка данных формы:', { name, email, phoneNumber, password });
  };

  return (
    <div className={login.containerLogin}>
      <div className={login.form_container}>
      <div className={login.sign_in}>
            <form onSubmit={handleSubmit}>
            <h1>Зарегистрироваться</h1>
            <input
                type="text"
                name="name"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                name="phoneNumber"
                placeholder="Номер телефона"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                type="text"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
      </div>
      <div className={login.toggle_container}>
        <div className={login.toggle}>
          <div className={login.toggle_panel}>
          <div className={login.toggle_right}>
                <h1>Добро пожаловать!</h1>
                <p>Введите Ваши персональные данные для авторизации</p>
               <NavLink to="/signIn"> <button className={login.hidden}>Войти</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;