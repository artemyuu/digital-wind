import React from 'react';
import '../../variables.css';
import style from './SlideHeader.module.css';
import work from '../../images/work-i.svg'

const SlideHeader = () => {
  return (
    <div className={style["slide-header"]}>
      <div className={style["slide-header__info"]}>
        <h2 className={style["slide-header__title"]}>
          открытый международный конкурс компьютерных работ
        </h2>
        <p className={style["slide-header__description"]}>
          среди детей, юношества и студенческой молодежи 
        </p>
        <button className={style["slide-header__btn"]}>
          <img src={work} alt="work-i" />
          отправить работу
        </button>
      </div>
      <div className={style["slide-header__img"]}/>
    </div>
  );
}

export default SlideHeader;
