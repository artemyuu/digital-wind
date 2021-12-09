import React from 'react';
import style from './AdminApplications.module.css';

const AdminApplications = () => {
  return (
    <>
      <table className={"table " + style["applications"]}>
        <thead>
          <tr>
            <th scope="col">Описание работы</th>
            <th scope="col">Участник</th>
            <th scope="col">Ссылка на работу</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul className={style["applications-list"]}>
                <li>
                  Воздушный мир
                </li>
                <li>
                  Высоко в небесах существует архипелаг воздушных островов, населенных Эльфеями: крошечными человечками с узорчатыми крыльями...
                </li>
                <li>
                  Международный
                </li>
                <li>
                <a href="">https://scratch.mit.edu/projects/517533112/</a>
                </li>
                <li>
                  Саратов
                </li>
                <li>
                  Статичная графика / Двумерная статичная графика
                </li>
                <li>
                  От 13 до 17 лет
                </li>
              </ul>
            </td>
            <td>
              <ul className={style["applications-list"]}>
                <li>
                  Иван Иванович Иванов
                </li>
                <li>
                  18 лет
                </li>
                <li>
                  г.Саратов, Саратовская область
                </li>
                <li>
                  mail@yandex.com
                </li>
                <li>
                  891705432654
                </li>
              </ul>
            </td>
            <td>
              <a href="#">https://digital-wind/storage/YSb6I</a> 
            </td>
            <td className="">
              <button className="btn btn-success mx-3">
                Принять
              </button>
              <button className="btn btn-danger mx">
                Отклонить
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <ul className={style["applications-list"]}>
                <li>
                  Тёмная ночь
                </li>
                <li>
                  Высоко в небесах существует темная ночь, которая несет в себе много жутких тайн!
                </li>
                <li>
                  Международный
                </li>
                <li>
                  <a href="">https://scratch.mit.edu/projects/517533112/</a>
                </li>
                <li>
                  Саратов
                </li>
                <li>
                  Статичная графика / Двумерная статичная графика
                </li>
                <li>
                  От 13 до 17 лет
                </li>
              </ul>
            </td>
            <td>
              <ul className={style["applications-list"]}>
                <li>
                  Иван Иванович Клюев
                </li>
                <li>
                  18 лет
                </li>
                <li>
                  г.Саратов, Саратовская область
                </li>
                <li>
                  mail@yandex.com
                </li>
                <li>
                  891705432654
                </li>
              </ul>
            </td>
            <td>
              <a href="#">https://digital-wind/storage/YSb6I</a> 
            </td>
            <td className="">
              <button className="btn btn-success mx-3">
                Принять
              </button>
              <button className="btn btn-danger mx">
                Отклонить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default AdminApplications;
