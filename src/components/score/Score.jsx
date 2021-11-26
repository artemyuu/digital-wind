import React from 'react';
import style from './Score.module.css'

const Score = (props) => {
  return (
    <div className={style["score"]}>
      <div className={style["number_img"]}>
        <div className={style["number"]}>
            <p>{props.score}</p>
        </div>
        <div className={style["img_score"]}>
            <img  className={style["score_icons"]} src={props.img} alt="" />
        </div>
      </div>
    <div className={style["number_text"]}>
       <p>{props.desc}</p>
    </div>
 </div>
  );
}

export default Score;
