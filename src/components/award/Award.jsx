import React from 'react';
import style from './Award.module.css';

const Award = () => {
  return (
    <div className={style['award']}>
      <div className={style["award-pdf"]}>
        <h3>PDF</h3>
      </div>
      <div className={style["award-info"]}>
        <p className={style["award-text"]}>
          Место: 2
        </p>
        <p className={style["award-text"]}>
          Работа: "Воздушный мир"
        </p>
        <p className={style["award-text"]}>
          Категория: Двумерная статичная граффика
        </p>
        <p className={style["award-text"]}>
          Возрастная категория: старше 18
        </p>
      </div>
    </div>
  );
}

export default Award;
