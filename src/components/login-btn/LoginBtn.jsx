import React from 'react';
import login from '../../images/log-in.svg';
import style from './LoginBtn.module.css';

const LoginBtn = () => {
  return (
    <div className={style["login-btn"]}>
      <span>Войти</span>
      <img src={login} alt="login" />
    </div>
  );
}

export default LoginBtn;
