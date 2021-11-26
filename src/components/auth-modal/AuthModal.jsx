import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Modal from 'react-modal';
import style from './AuthModal.module.css';
import close from '../../images/close-i.svg'

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
  const { toggleModal, isModal } = props;
  const { toggleAuth, isAuth } = props;

  const login = (e) => {
    e.preventDefault();
    toggleModal(isModal);
    toggleAuth(isAuth);
    localStorage.setItem('isAuth', true);
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
          <TextField id="outlined-basic" label="Логин" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
          <TextField id="outlined-basic" type="password" label="Пароль" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
        <button className={style["submit-btn"]} onClick={(e)=> login(e)}>Войти</button>
        <p className={style["register-link"]} onClick={()=>setModalLogin(!modalLogin)}>Регистрация</p>
      </form> :
      <form className={style["registation-form"]}>
         <h2 className={style["header-text"]}>Регистрация</h2>
         <TextField id="outlined-basic" label="Логин" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
         <TextField id="outlined-basic" type="password" label="Пароль" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
         <TextField id="outlined-basic" label="E-mail" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
         <TextField id="outlined-basic" label="Фамилия" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
         <TextField id="outlined-basic" label="Имя" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
         <TextField id="outlined-basic" label="Отчество" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
         <TextField id="outlined-basic" label="Мобильный" variant="outlined" size="small" color="error" margin="dense" autoComplete="off"/>
        <button  className={style["submit-btn"]}>Зарегистрироватся</button>
        <p className={style["register-link"]} onClick={()=>setModalLogin(!modalLogin)}>Войти</p>
      </form>
      }
    </Modal>
  );
}

export default AuthModal;
