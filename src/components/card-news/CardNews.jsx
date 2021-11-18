import React from 'react';
import style from './CardNews.module.css';

const CardNews = (props) => {
  const img = require('../../images/news/' + props.img).default;
  return (
    <div className={style["card-news"]}>
      <img className={style["card-news__img"]} src={img} alt="" />
      <div className={style["card-news__info"]}>
        <p className={style["card-news__title"]}>{props.title}</p>
        <a className={style["card-news__link"]} href="#">Подробнее</a>
        <span className={style["card-news__date"]}>{props.date}</span>
      </div>
    </div>
  );
}

export default CardNews;
