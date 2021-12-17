import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';
import style from './AuthModal.module.css';
import close from '../../images/close-i.svg'

import { userService } from '../../services/userService';

const styles = theme => ({
  notchedOutline: {},
  focused: {
    "& $notchedOutline": {
      borderColor: "yellow"
    }
  }
});

const modalStyle = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0, 0.3)'
  },
}

const AuthModal = (props) => {
  const [ modalLogin, setModalLogin ] = useState(true);
  const [ loginInput, setLoginInput ] = useState('');
  const [ passwordInput, setPasswordInput ] = useState('');
  const [ invalidLogin, setInvalidLogin ] = useState(false);
  const { toggleModal, isModal } = props;
  const { toggleAuth, isAuth } = props;

  const login = (e) => {
    e.preventDefault();
    const loggedUser = userService.login(loginInput, passwordInput)
    if(loggedUser) {
      toggleModal(isModal);
      toggleAuth(isAuth);
      localStorage.setItem('isAuth', JSON.stringify(loggedUser));
    }
    else {
      setInvalidLogin(true);
    }
  }

  return (
    <Modal
      isOpen={isModal}
      style={modalStyle}
      shouldCloseOnOverlayClick={true}
    >
      <input className={style["close-btn"]} type="image" src={close} onClick={toggleModal}></input>
      {
      modalLogin ?
      <form className={style["modal-form"]}>
          <h2 className={style["header-text"]}>Авторизация</h2>
          <TextField label="Логин" variant="outlined" size="small" color="error" margin="dense" autoComplete="off" value={loginInput} onChange={ (e) => setLoginInput(e.target.value) }/>
          <TextField type="password" label="Пароль" variant="outlined" size="small" color="error" margin="dense" autoComplete="off" value={passwordInput} onChange={ (e) => setPasswordInput(e.target.value) }/>
        <button className={style["submit-btn"]} onClick={(e)=> login(e)}>Войти</button>
        <p className={style["register-link"]} onClick={()=>setModalLogin(!modalLogin)}>Регистрация</p>
        {invalidLogin ? <p className={style["invalid-login"]}>Неправильный логин или пароль</p> : ''}
      </form> :
      <form className={style["registation-form"]}>
         <h2 className={style["header-text"]}>Регистрация</h2>
         <TextField label="Логин" variant="outlined" size="small" color="error" margin="dense" value="" autoComplete="off"/>
         <TextField type="password" label="Пароль" variant="outlined" size="small" color="error" value="" margin="dense" autoComplete="off"/>
        <button  className={style["submit-btn"]}>Зарегистрироватся</button>
        <p className={style["register-link"]} onClick={()=>setModalLogin(!modalLogin)}>Войти</p>
      </form>
      }
    </Modal>
  );
}

export default AuthModal;
