import style from './AccountPersonal.module.css';

import img from '../../images/winner.png';
import edit from '../../images/edit-i-red.svg';

import React from 'react';

const prepareFIO = (name, surname, patros) => {
  if(!(name && surname && patros)) return false;
  return `${name} ${patros} ${surname}`;
} 

const AccountPersonal = () => {
  let user = localStorage.getItem('isAuth');
  let fio = false;
  if(user) {
    user = JSON.parse(user)
    fio = prepareFIO(user.name, user.surname, user.patros);
  }
  return (
    <div className={style["account-personal"]}>
      <img className={style["account-presonal__img"]} src={img} alt=""/>
      <div className={style["account-personal__info"]}>
        <p className={style["account-personal__name"]}>{fio? fio : "ФИО не указано"}</p>
        <p className={style["account-personal__text"]}>{user?.age || 'Возраст не указан'}</p>
        <p className={style["account-personal__text"]}>{user?.adress || 'Адрес не указан'}</p>
        <p className={style["account-personal__text"]}>{user?.email || 'Email не указан'}</p>
        <p className={style["account-personal__text"]}>{user?.mobile || 'Мобильный не указан'}</p>
      </div>
      <input className={style["account-personal__edit"]} type="image" src={edit} alt="edit"></input>
    </div>
  );
}

export default AccountPersonal;
