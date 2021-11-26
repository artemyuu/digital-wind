import React from 'react';
import Score from '../score/Score';
import style from './ScoreBar.module.css';

import user from '../../images/user-i.svg';
import edit from '../../images/edit-i.svg';
import trophy from '../../images/trophy-i.svg';
import gift from '../../images/gift-i.svg';

const Scorebar = () => {
  return (
    <div className={style["wrapper"]}>
      <div className="container">
        <div className={style["score-bar"]}>
          <Score desc="участников" score="560" img={user}/>
          <Score desc="работ" score="1560" img={edit}/>
          <Score desc="победителей" score="23" img={trophy}/>
          <Score desc="призов" score="100" img={gift}/>
        </div>
      </div>
    </div>
  );
}

export default Scorebar;
