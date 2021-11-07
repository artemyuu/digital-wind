import React from 'react';
import '../../style.css';
import style from './SendWorkBtn.module.css';

const SendWorkBtn = () => {
  return (
    <button className={style["send-work-btn"] + ' accent-btn-outline'}>
      Отправить работу
    </button>
  );
}

export default SendWorkBtn;
