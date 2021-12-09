import React from 'react';
import style from './AdminCMS.module.css';

const AdminCMS = () => {
  return (
    <>
      <div className="top__banner">
        <h4>Верхний баннер</h4>
        <div className="input-group mb-3">
          <span className="input-group-text">Заголовок</span>
          <input className="form-control" aria-label="With textarea" value="ОТКРЫТЫЙ МЕЖДУНАРОДНЫЙ КОНКУРС КОМПЬЮТЕРНЫХ РАБОТ"></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Доп.текст</span>
          <textarea className="form-control" aria-label="With textarea" value="среди детей, юношества и студенческой молодежи"></textarea>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text">Изображение</label>
          <input type="file" class="form-control"/>
        </div>
        <button className="btn btn-outline-danger" type="button">Обновить</button>
      </div>
      <hr />
      <div className="about__contest">
        <h4>О конкурсе</h4>
        <div className="input-group mb-3">
          <span className="input-group-text">Заголовок</span>
          <input className="form-control" aria-label="With textarea" value="ЦИФРОВОЙ ВЕТЕР2021"></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Доп.текст</span>
          <textarea className="form-control" aria-label="With textarea" value="ПРОВОДИТСЯ ЕЖЕГОДНО ФЕДЕРАЛЬНЫМ ГОСУДАРСТВЕННЫМ БЮДЖЕТНЫМ ОБРАЗОВАТЕЛЬНЫМ УЧРЕЖДЕНИЕМ ВЫСШЕГО ОБРАЗОВАНИЯ «САРАТОВСКИЙ ГОСУДАРСТВЕННЫЙ ТЕХНИЧЕСКИЙ УНИВЕРСИТЕТ ИМЕНИ ГАГАРИНА Ю.А. (СГТУ ИМЕНИ ГАГАРИНА Ю.А.) В РАМКАХ ПРОГРАММЫ РАЗВИТИЯ ОПОРНОГО ВУЗА И СТРАТЕГИЧЕСКОГО ПРОЕКТА «ТЕХНАРИУМ»."></textarea>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Элемент списка</span>
          <input className="form-control" aria-label="With textarea"></input>
          <button className="btn btn-outline-secondary" type="button">Добавить</button>
        </div>
        <ul className={style["list-about-contest"]}>
          <li className={style["list-about-contest__item"]}>
            Привлечение внимания школьников и студентов в современным информационным технологиям, приобретение конкурсантами практических навыков работы с программным обеспечением.
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            Создание условий для раскрытия творческих способностей и интеллектуального потенциала молодежи.
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            Популяризация проектной деятельности и научно-технического творчества молодежи.
            <button className="btn btn-danger">Удалить</button>
          </li>
        </ul>
        <button className="btn btn-outline-danger" type="button">Обновить</button>
      </div>
      <hr />
      <div className="score-bar">
        <h4>Показатели</h4>
        <div className="d-flex justify-content-between">
          <div>
            <div className="input-group mb-3">
              <span className="input-group-text">Кол-во участников</span>
              <input className="form-control" aria-label="With textarea" value="560"></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Кол-во работ</span>
              <input className="form-control" aria-label="With textarea" value="1560"></input>
            </div>
          </div>
          <div>
            <div className="input-group mb-3">
              <span className="input-group-text">Кол-во победителей</span>
              <input className="form-control" aria-label="With textarea" value="23"></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Кол-во призов</span>
              <input className="form-control" aria-label="With textarea" value="100"></input>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-danger" type="button">Обновить</button>
      </div>
      <hr />
      <div className="winners">
        <h4>Победители</h4>
        <div className="d-flex align-items-start">
          <div className="w-50">
            <div className="input-group mb-3">
              <span className="input-group-text">ФИО</span>
              <input className="form-control" aria-label="With textarea"></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Место</span>
              <input className="form-control" aria-label="With textarea"></input>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Номинация</span>
              <input className="form-control" aria-label="With textarea"></input>
            </div>
            <div className="input-group mb-3">
              <label className="input-group-text">Фото</label>
              <input type="file" class="form-control"/>
            </div>
            <button className="btn btn-outline-secondary mb-3">Добавить</button>
          </div>
        </div>
        <ul className={style["list-about-contest"]}>
          <li className={style["list-about-contest__item"]}>
            Акимов Михаил 1 место Двумерная статичная графика
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            Акимов Михаил 1 место Двумерная статичная графика
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            Акимов Михаил 1 место Двумерная статичная графика
            <button className="btn btn-danger">Удалить</button>
          </li>
        </ul>
        <button className="btn btn-outline-danger" type="button">Обновить</button>
      </div>
      <hr />
      <div className="works">
        <h4>Работы участников</h4>
        <div className="input-group mb-3">
          <span className="input-group-text">Ссылка на работу</span>
          <input className="form-control" aria-label="With textarea"></input>
          <button className="btn btn-outline-secondary" type="button">Добавить</button>
        </div>
        <ul className={style["list-about-contest"]}>
          <li className={style["list-about-contest__item"]}>
            Воздушный мир зверей
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            Воздушный мир зверей
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            Воздушный мир зверей
            <button className="btn btn-danger">Удалить</button>
          </li>
        </ul>
        <button className="btn btn-outline-danger" type="button">Обновить</button>
      </div>
      <hr />
      <div className="works">
        <h4>Партнёры</h4>
        <div className="input-group mb-3">
          <span className="input-group-text">Ссылка на партнёра</span>
          <input className="form-control" aria-label="With textarea"></input>
        </div>
        <div className="input-group mb-3">
              <label className="input-group-text">Фото</label>
              <input type="file" class="form-control"/>
            </div>
        <ul className={style["list-about-contest"]}>
          <li className={style["list-about-contest__item"]}>
            https://ru.exactpro.com/company/locations/saratov
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            https://sar.edu-netcracker.com/
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            https://www.sslalf.ru/
            <button className="btn btn-danger">Удалить</button>
          </li>
          <li className={style["list-about-contest__item"]}>
            https://sibintek.ru/
            <button className="btn btn-danger">Удалить</button>
          </li>
        </ul>
        <button className="btn btn-outline-danger" type="button">Обновить</button>
      </div>
    </>
  );
}

export default AdminCMS;
