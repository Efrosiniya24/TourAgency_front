import React from 'react';
import MainPageUser from "./pages/mainPage/MainPageUser";
import AboutUs from "./pages/AboutUs/AboutUs";
import SignIn from "./pages/authorization/SignIn";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/authorization/SignUp';
import MainAdmin from './pages/mainAdmin/MainAdminPage';
import DataBase from './pages/dataBase/DataBase';
import ToursAdmin from './pages/toursAdmin/ToursAdmin';


function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<MainPageUser/>}></Route>
                <Route path="/aboutUs" element={<AboutUs/>}></Route>
                <Route path="/signIn" element={<SignIn/>}></Route>
                <Route path="/signUp" element={<SignUp/>}></Route>
                <Route path="/mainAdmin" element={<MainAdmin/>}></Route>
                <Route path="/dataBase" element={<DataBase/>}></Route>
                <Route path="/toursAdmin" element={<ToursAdmin/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
