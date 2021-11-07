import React from 'react';
import Winner from '../winner/Winner';
import style from './Winners.module.css'

const Winners = () => {
  return (
    <div className="container">
      <div className={style["winners"]}>
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img="winner.png"
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img="winner.png"
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img="winner.png"
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img="winner.png"
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img="winner.png"
        />
        <Winner
          name="Акимов Михаил"
          place="1"
          nomination="Двумерная статичная графика"
          img="winner.png"
        />
      </div>
    </div>
  );
}

export default Winners;
