import React, { useState } from 'react';
import style from './Winner.module.css';

const Winner = (props) => {
  return (
    <div className={style["winner"]}>
    <img src={props.img} className={style["winner-img"]} />
    <div className={style["winner-text"]}>
      <p className={style["winner-name"]}>{props.name}</p>
      <p className={style["winner-rank"]}>{props.place} место</p>
      <p className={style["winner-nomination"]}>{props.nomination}</p>
    </div>
   </div>
  );
}

export default Winner;
