import React from 'react';
import style from './AboutContest.module.css';
import circle from '../../images/check-circle-i.svg';

const Aboutcontest = () => {
  return (
    <div className="container">
      <div className={style["about-contest"]}>
      <div className={style["about-contest-leftcont"]}>
        <div className={style["about-contest-leftcont-heading"]}>
          <p>
            Цифровой ветер
            <span className={style["colortext"]}>
              2021
            </span>
          </p>
        </div>
        <div className={style["about-contest-leftcont-text"]}>
          <p>
            проводится ежегодно федеральным
            государственным бюджетным образовательным учреждением высшего образования «Саратовский государственный технический университет имени Гагарина Ю.А. (СГТУ имени Гагарина Ю.А.) в
            рамках программы развития опорного ВУЗа и стратегического проекта «Технариум».
          </p>
        </div>
      </div>
      <div className={style["about-contest-rightcont"]}>
      <ul className={style["ul-flex-container"]}>
        <div className={style["img-pos"]}><img src={circle} className={style["ul-img"]} /><li className={style["flex-item"]}>
          Привлечение внимания школьников и студентов в современным информационным
          технологиям, приобретение конкурсантами практических навыков работы с программным
          обеспечением.
        </li></div>
        <div className={style["img-pos"]}><img src={circle} className={style["ul-img"]} /><li className={style["flex-item"]}>
            Создание условий для раскрытия творческих способностей и интеллектуального
            потенциала молодежи.
          </li></div>
        <div className={style["img-pos"]}><img src={circle} className={style["ul-img"]} /><li className={style["flex-item"]}>
        Популяризация проектной деятельности и научно-технического творчества молодежи.          
          </li></div>
      </ul>
      </div>
    </div>
  </div>
  );
}

export default Aboutcontest;
