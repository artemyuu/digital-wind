import React from 'react';
import style from './LoginBtn.module.css';
import logout from '../../images/log-in.svg';

const LoginBtn = ({toggleModal}) => {
  return (
    <div onClick={toggleModal} className={style["login-btn"]}>
      <span>Войти</span>
      <img src={logout} alt="login" />
    </div>
  );
}

export default LoginBtn;
