
import tousAdmin from './toursAdmin.module.css';
import { NavLink } from "react-router-dom";
import HeaderAdmin from '../../components/headerAdmin/headerAdmin'; 
import SliderBar from '../../components/sliderBar/sliderBar';
import React from 'react';

const toursAdmin
 = () => {
    return ( 
          <div>
               <HeaderAdmin/>
               <SliderBar/>
           
          </div>
     );
}
 
export default toursAdmin;