import React from 'react';
import { useNavigate } from 'react-router';
import '../../style.css';
import style from './SendWorkBtn.module.css';

const SendWorkBtn = (props) => {
  const navigate = useNavigate();
  const { toggleModal } = props;
  const isAuth = () => localStorage.getItem('isAuth') ? navigate(`/digital-wind/add-work`) : toggleModal();
  return (
    <button onClick={(e) => isAuth()} className={style["send-work-btn"] + ' accent-btn-outline'}>
      Отправить работу
    </button>
  );
}

export default SendWorkBtn;
