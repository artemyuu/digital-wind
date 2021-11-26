import React from 'react';
import Winner from '../winner/Winner';
import style from './Winners.module.css'
import winner from '../../images/winner.png'

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
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img={winner}
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img={winner}
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img={winner}
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img={winner}
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img={winner}
        />
      </div>
    </div>
  );
}

export default Winners;
