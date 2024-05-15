import sliderBar from './sliderBar.module.css';
import databaseIcon from "./photo/database.png";
import requestIcon from "./photo/application.png";
import analyticsIcon from "./photo/analytics.png";
import reportIcon from "./photo/report.png";
import tourIcon from "./photo/travel.png";

import { NavLink } from "react-router-dom";


const SliderBar = () => {
    return ( 
        <div>
            <aside className={sliderBar.sidebar}>
          <nav>
            <ul>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={databaseIcon} />
                  <p className={sliderBar.menu}>База данных</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={requestIcon} />
                  <p className={sliderBar.menu}>Заявки</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={analyticsIcon} />
                  <p className={sliderBar.menu}>Аналитика</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={reportIcon} />
                  <p className={sliderBar.menu}>Отчет</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="#" activeClassName="active">
                  <img src={tourIcon} />
                  <p className={sliderBar.menu}>Туры</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        </div>
     );
}
 
export default SliderBar;