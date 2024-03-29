import React from 'react';
import style from './CardWork.module.css';
import star from '../../images/star-i.svg';
import nonstar from '../../images/nonstar-i.svg';
import { Link } from 'react-router-dom';

const CardWork = (props) => {
  const img = require('../../images/' + props.img).default;
  return (
    <Link to="/digital-wind/catalog/1">
      <div className={style["card-work"]}>
        <div className={style["card-work__info"]}>
          <h4 className={style["card-work__title"]}>
            {props.title}
          </h4>
          <div className={style["card-work__rating"]}>
            <img src={star} alt="" className={style["card-work__star"]} />
            <img src={star} alt="" className={style["card-work__star"]} />
            <img src={star} alt="" className={style["card-work__star"]} />
            <img src={star} alt="" className={style["card-work__star"]} />
            <img src={nonstar} alt="" className={style["card-work__star"]} />
          </div>
          <p className={style["card-work__description"]}>
            {props.description}
          </p>
        </div>
        <img className={style["card-work__img"]} src={img} alt="" />
      </div>
    </Link>
  );
}

export default CardWork;
