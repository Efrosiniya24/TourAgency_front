
import tousAdmin from './toursAdmin.module.css';
import { NavLink } from "react-router-dom";
import HeaderAdmin from '../../components/headerAdmin/headerAdmin'; 


const toursAdmin
 = () => {
    return ( 
          <div>
               {/* <HeaderAdmin />
               <div className={dataBase.containerDataBase}>
                    <aside className={dataBase.sidebar}>
                         <nav>
                         <ul>
                              <li>
                                   <NavLink to="#" activeClassName="active">
                                   <img src={databaseIcon} />
                                   <p className={dataBase.menuCurrent}>База данных</p>
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="#" activeClassName="active">
                                   <img src={requestIcon} />
                                   <p className={dataBase.menu}>Заявки</p>
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="#" activeClassName="active">
                                   <img src={analyticsIcon} />
                                   <p className={dataBase.menu}>Аналитика</p>
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="#" activeClassName="active">
                                   <img src={reportIcon} />
                                   <p className={dataBase.menu}>Отчет</p>
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="#" activeClassName="active">
                                   <img src={tourIcon} />
                                   <p className={dataBase.menu}>Туры</p>
                                   </NavLink>
                              </li>
                         </ul>
                         </nav>
                    </aside>
               </div> */}
          </div>
     );
}
 
export default toursAdmin;