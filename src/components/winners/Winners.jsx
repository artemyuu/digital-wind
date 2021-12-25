import React from 'react';
import Winner from '../winner/Winner';
import style from './Winners.module.css'

import winner from '../../images/winner.png';
import girl1 from '../../images/faces/girl.jpg';
import girl2 from '../../images/faces/girl2.jpg';
import girl3 from '../../images/faces/girl3.jpg';
import student from '../../images/faces/student.jpg';
import man from '../../images/faces/man.jpg';

const Winners = () => {
  return (
    <div className="container">
      <div className={style["winners"]}>
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img={winner}
        />
        <Winner
          name="Иванова Милана"
          place="2"
          nomination="Двумерная статичная графика"
          img={girl2}
        />
        <Winner
          name="Дынина Ирина"
          place="3"
          nomination="Двумерная статичная графика"
          img={girl1}
        />
        <Winner
          name="Крылов Артём"
          place="1"
          nomination="Трехмерная статичная графика"
          img={student}
        />
        <Winner
          name="Климов Виктор"
          place="2"
          nomination="Трехмерная статичная графика"
          img={man}
        />
        <Winner
          name="Ахматова Анна"
          place="3"
          nomination="Трехмерная статичная графика"
          img={girl3}
        />
      </div>
    </div>
  );
}

export default Winners;
