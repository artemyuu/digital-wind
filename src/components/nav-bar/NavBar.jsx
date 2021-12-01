import React from 'react';
import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import home from '../../images/home-i.svg';
import catalog from '../../images/catalog-i.svg';
import news from '../../images/news-i.svg';
import faq from '../../images/faq-i.svg';

const NavBar = () => {
  return (
    <nav className={style["nav-bar"]}>
      <ul className={style["nav-list"]}>
        <li className={style["nav-list__item"]}>
          <Link to="/digital-wind/">
            <img src={home} alt="home" />
            <span>Главная</span>
          </Link>
        </li>
        <li className={style["nav-list__item"]}>
          <Link to="/digital-wind/catalog">
            <img src={catalog} alt="catalog" />
            <span>Каталог работ</span>
          </Link>
        </li>
        <li className={style["nav-list__item"]}>
          <Link to="/digital-wind/news">
            <img src={news} alt="news" />
            <span>Новости</span>
          </Link>
        </li>
        <li className={style["nav-list__item"]}>
          <Link to="/digital-wind/faq">
            <img src={faq} alt="faq" />
            <span>FAQ</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
