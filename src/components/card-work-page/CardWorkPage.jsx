import React from 'react';
import style from './CardWorkPage.module.css';
import SectionTitle from '../section-title/SectionTitle';
import Comment from '../comment/Comment';
import img from '../../images/star-i.svg';
import bigwork from "../../images/bigwork.png";

const CardWorkPage = () => {
  return (
    <>
    <SectionTitle title="Карточка работы"/>
    <div className="container">
      <div className={style["card-work-page"]}>
        <img className={style["card-work-page-img"]} src={bigwork} alt="" />
        <div className={style["card-work-page-info"]}>
          <h2 className={style["card-work-page-info__title"]}>
            Воздушный мир
          </h2>
          <p className={style["card-work-page-info__description"]}>
            Высоко в небесах существует архипелаг воздушных островов, населенных Эльфеями: крошечными человечками с узорчатыми крыльями...
          </p>
          <div className={style["card-work-page-info__rating"]}>
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
          <p className={style["card-work-page-info__number"]}>
            <b>Номер работы: </b> 93919
          </p>
          <p className={style["card-work-page-info__tour"]}>
            <b>Тур: </b> Международный 
          </p>
          <p className={style["card-work-page-info__adress"]}>
            <b>Адрес проекта: </b> https://scratch.mit.edu/projects/517533112/ 
          </p>
          <p className={style["card-work-page-info__city"]}>
            <b>Город: </b> Саратов
          </p>
          <div className={style["card-work-page-info__tags"]}>
            <span className={style["tag"]}>
              Статичная графика
            </span>
            <span className={style["tag"]}>
              Двумерная статичная графика
            </span>
            <span className={style["tag"]}>
              от 13 до 17 лет
            </span>
          </div>
          <h3 className={style["card-work-page-info__comments"]}>
            Комментарии:
          </h3>
          <div className={style["card-work-page-info__comments-send-comment"]}>
            <input disabled type="text"  className={style["card-work-page-info__comment-input"]} placeholder="Войдите, чтобы оставлять коментарии"/ >
            <button disabled className={style["card-work-page-info__comment-send"]}>
              Отправить
            </button>
          </div>
          <div className={style["comment-box"] + ' custom-scroll'}>
            <Comment author="Иван Иванов" date="19/02/2021 19:00" body="Чудесная работа!!!"/>
            <Comment author="Иван Иванов" date="19/02/2021 19:00" body="Чудесная работа!!!"/>
            <Comment author="Иван Иванов" date="19/02/2021 19:00" body="Чудесная работа!!!"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CardWorkPage;
