import style from './AccountPersonal.module.css';

import img from '../../images/winner.png';
import edit from '../../images/edit-i-red.svg';

import React from 'react';

const AccountPersonal = () => {
  return (
    <div className={style["account-personal"]}>
      <img className={style["account-presonal__img"]} src={img} alt=""/>
      <div className={style["account-personal__info"]}>
        <p className={style["account-personal__name"]}>Иванов Иван Иванович</p>
        <p className={style["account-personal__text"]}>18 лет</p>
        <p className={style["account-personal__text"]}>г.Саратов, Саратовская область</p>
        <p className={style["account-personal__text"]}>Адрес email: mail@yandex.com</p>
        <p className={style["account-personal__text"]}>Мобильный: 891705432654</p>
      </div>
      <input className={style["account-personal__edit"]} type="image" src={edit} alt="edit"></input>
    </div>
  );
}

export default AccountPersonal;
