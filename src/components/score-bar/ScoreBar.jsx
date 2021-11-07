import React from 'react';
import Score from '../score/Score';
import style from './ScoreBar.module.css';

const Scorebar = () => {
  return (
    <div className={style["wrapper"]}>
      <div className="container">
        <div className={style["score-bar"]}>
          <Score desc="участников" score="560" img="user-i.svg"/>
          <Score desc="работ" score="1560" img="edit-i.svg"/>
          <Score desc="победителей" score="23" img="trophy-i.svg"/>
          <Score desc="призов" score="100" img="gift-i.svg"/>
        </div>
      </div>
    </div>
  );
}

export default Scorebar;
