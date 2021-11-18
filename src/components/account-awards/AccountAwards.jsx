import React from 'react';
import Award from '../award/Award';

import style from './AccountAwards.module.css';

const AccountAwards = () => {
  return (
    <div className={style['account-awards'] + ' custom-scroll'}>
      <h2 className={style['account-awards__title']}>Награды</h2>
        <Award />
        <Award />
        <Award />
        <Award />
    </div>
  );
}

export default AccountAwards;
