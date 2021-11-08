import React from 'react';
import style from './Footer.module.css';
import map from '../../images/map.png';

const Footer = () => {
  return (
    <div className={style["footer"]}>   
      <div className="container">
        <div className={style["footer-wrapper"]}>
            <form action="" className={style["have-questions"]}>
              <p>
                Остались вопросы? Напииште нам
              </p>
              <input type="text" placeholder="Имя*"/>
              <input type="text" placeholder="Телефон"/>
              <input type="text" placeholder="Email*"/>
              <textarea name="" id="" cols="30" rows="5" placeholder="Сообщение*"></textarea>
              <button className={style["have-questions__submit"]}>
                Оправить
              </button>
            </form>
          <img src={map} alt="" className={style["footer__map"]} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
