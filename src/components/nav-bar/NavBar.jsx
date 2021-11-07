import React from 'react';
import style from './NavBar.module.css';
import catalog from '../../images/catalog-i.svg';
import faq from '../../images/faq-i.svg';
import news from '../../images/news-i.svg';
import home from '../../images/home-i.svg';

const NavBar = () => {
  return (
    <nav className={style["nav-bar"]}>
      <ul className={style["nav-list"]}>
        <li className={style["nav-list__item"]}>
          <a href="#">
            <img src={home} alt="home" />
            <span>Главная</span>
          </a>
        </li>
        <li className={style["nav-list__item"]}>
          <a href="#">
            <img src={catalog} alt="catalog" />
            <span>Каталог работ</span>
          </a>
        </li>
        <li className={style["nav-list__item"]}>
          <a href="#">
            <img src={news} alt="news" />
            <span>Новости</span>
          </a>
        </li>
        <li className={style["nav-list__item"]}>
          <a href="#">
            <img src={faq} alt="faq" />
            <span>FAQ</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
