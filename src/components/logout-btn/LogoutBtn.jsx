import React from 'react';
import { Link } from 'react-router-dom';
import style from './LogoutBtn.module.css';
import icon from '../../images/logout-i.svg';

const LogoutBtn = (props) => {
  const {isAuth, toggleAuth } = props; 

  const logout = () => {
    toggleAuth(isAuth);
    localStorage.removeItem('isAuth');
    if(window.location.pathname === '/account') window.location.pathname = ''
  }

  return (
    <div className={style["logout-btn"]}>
      <Link to="/account" className={style["account-link"]}> Личный кабинет </Link>
      <span onClick={logout}>Выйти</span>
      <img src={icon} alt="logout" />
    </div>
  );
}

export default LogoutBtn;
