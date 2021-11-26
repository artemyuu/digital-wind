import React, { useEffect, useState } from 'react';
import SendWorkBtn from '../send-work-btn/SendWorkBtn';
import style from './TopMenu.module.css';
import Search from '../search/Search';
import LoginBtn from '../login-btn/LoginBtn';
import AuthModal from '../auth-modal/AuthModal';
import LogoutBtn from '../logout-btn/LogoutBtn';

import logo from '../../images/logo.png'

const TopMenu = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() =>
    setIsAuth(!!localStorage.getItem('isAuth')), 
  []);

  const toggleModal = () => setIsModal(!isModal);
  const toggleAuth = () => setIsAuth(!isAuth);

  return (
    <div className={style["top-menu"]}>
      <img className={style.logo} src={logo} alt={"logo"} />
      <Search />
      <div className={style.wrapper}>
        <AuthModal toggleAuth={toggleAuth} isAuth={isAuth} toggleModal={toggleModal} isModal={isModal}/>
        <SendWorkBtn />  
        {isAuth ? <LogoutBtn toggleAuth={toggleAuth} isAuth={isAuth} /> :<LoginBtn toggleModal={toggleModal}/>}
      </div>
    </div>
  );
}

export default TopMenu;
