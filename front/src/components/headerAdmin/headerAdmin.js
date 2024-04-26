import React from 'react';
import header from "./headerAdmin.module.css";

const HeaderAdmin = () => {
    return ( 
        <header className={header.headerNotMain}>
        <a href="/static" className={header.logo}>WORLD</a>
        </header>
     );
}
 
export default HeaderAdmin;