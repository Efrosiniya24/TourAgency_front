import header from "./../styles/header.module.css"
import index from "./../styles/index.module.css"
import aboutUs from "./../styles/aboutUs.module.css"

import search from "./../photo/search.png"
import we from "./../photo/we.jpg"

const MainPageUser = () => {
    return ( 
        <div>
            <header className={header.headerNotMain}>
                <a href="/static" className={index.logo}>WORLD</a>
                <ul className={header.nav}>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#"> О нас</a></li>
                    <li><a href="#">Туры</a></li>
                    <li><a href="#">Гостиницы</a></li>
                </ul>
                <div className={header.search_icon}>
                    <img src={search} width="20" height="20" alt=""/>
                </div>
            </header>
            <main>
                <div className={aboutUs.first_clide}>
                    <div className={aboutUs.rectangle}>
                        <img src={we}/>
                        <h3>Наша <br/>история</h3>
                        <p>Турагентство WORLD было основано в 2016 году группой друзей,
                            которые были объединены общей страстью к путешествиям. Мы
                            начинали с небольшого офиса, но за эти годы мы выросли в одну
                            из ведущих туроператоров в стране. За 7 лет мы отправили в
                            незабываемые поездки более 40 000 человек, открыв им красоту
                            300+ уникальных направлений</p>
                        <div className={aboutUs.p_inColor}>
                            <h3>Мы работаем для того,<br/>
                                чтобы ваши мечты о путешествиях стали<br/>
                                реальностью!
                            </h3>
                        </div>
                    </div>
                </div>
            </main>
        </div>
  );
}
 
export default MainPageUser;