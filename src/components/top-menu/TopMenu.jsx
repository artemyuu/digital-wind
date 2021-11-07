import logo from '../../images/logo.png';
import React from 'react';
import SendWorkBtn from '../send-work-btn/SendWorkBtn';
import style from './TopMenu.module.css';
import Search from '../search/Search';
import LoginBtn from '../login-btn/LoginBtn';

const TopMenu = () => {
  return (
    <div className={style["top-menu"]}>
      <img className={style.logo} src={logo} alt={"logo"} />
      <Search />
      <div className={style.wrapper}>
        <SendWorkBtn />  
        <LoginBtn />  
      </div>
    </div>
  );
}

export default TopMenu;
