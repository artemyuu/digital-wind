import React from 'react';
import style from './NavBar.module.css';
import catalog from '../../images/catalog-i.svg';
import faq from '../../images/faq-i.svg';
import news from '../../images/news-i.svg';
import home from '../../images/home-i.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={style["nav-bar"]}>
      <ul className={style["nav-list"]}>
        <li className={style["nav-list__item"]}>
          <Link to="/">
            <img src={home} alt="home" />
            <span>Главная</span>
          </Link>
        </li>
        <li className={style["nav-list__item"]}>
          <Link to="/catalog">
            <img src={catalog} alt="catalog" />
            <span>Каталог работ</span>
          </Link>
        </li>
        <li className={style["nav-list__item"]}>
          <Link to="/news">
            <img src={news} alt="news" />
            <span>Новости</span>
          </Link>
        </li>
        <li className={style["nav-list__item"]}>
          <Link to="faq">
            <img src={faq} alt="faq" />
            <span>FAQ</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
