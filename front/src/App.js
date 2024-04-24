import React from 'react';
import MainPageUser from "./pages/MainPageUser";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <Router>
            <Routes>
                {/* <Route path="/" element={<MainPageUser/>}></Route> */}
                <Route path="/" element={<AboutUs/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
