import React from 'react';
import { Link } from 'react-router-dom';
import style from './CardNews.module.css';

const CardNews = (props) => {
  const img = require('../../images/news/' + props.img).default;
  return (
    <div className={style["card-news"]}>
      <img className={style["card-news__img"]} src={img} alt="" />
      <div className={style["card-news__info"]}>
        <p className={style["card-news__title"]}>{props.title}</p>
        <Link className={style["card-news__link"]} to="/digital-wind/news/1">Подробнее</Link>
        <span className={style["card-news__date"]}>{props.date}</span>
      </div>
    </div>
  );
}

export default CardNews;
