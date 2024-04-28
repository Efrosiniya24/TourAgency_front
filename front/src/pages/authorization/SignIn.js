import React from 'react';
import login from './login.module.css';

import { NavLink } from "react-router-dom";

const SignIn = () => {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [_csrf, setCsrf] = React.useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className={login.mainLogin}>
      <div className={login.containerLogin}>
        <div className={login.sign_in}>
          <div className={login.form_container}>
            <form onSubmit={handleSubmit}>
              <h1>Войти</h1>
              <input 
                type="email" 
                name="username" 
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                type="password" 
                name="password" 
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="hidden" name="_csrf" value={_csrf} /> 
              <NavLink to="/mainAdmin"><button type="submit">Войти</button></NavLink>
            </form>
          </div>
        </div>
        <div className={login.toggle_container}>
          <div className={login.toggle}>
            <div className={login.toggle_panel}>
              <div className={login.toggle_right}>
                <h1>Добро <br/>пожаловать!</h1>
                <p>Введите Ваши персональные данные для авторизации</p>
                {/* Consider using a Link component from React Router for navigation */}
                <NavLink to ="/signUp"><button className={login.hidden} onClick={() => {
                  // Handle navigation to registration page
                }}>Зарегистрироваться</button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;