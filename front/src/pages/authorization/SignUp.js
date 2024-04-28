import React, { useState } from 'react';
import login from './login.module.css';
import { NavLink } from "react-router-dom";
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      phone,
      password
    };

    try {
      const response = await axios.post('http://localhost:8000/user/signUp', data);
      console.log('Ответ сервера:', response.data);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
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
              name="phone"
              placeholder="Номер телефона"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              <NavLink to="/signIn">
                <button className={login.hidden}>Войти</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;