import style from './Account.module.css';

import React from 'react';
import AccountWorks from '../account-works/AccountWorks';
import AccountPersonal from '../account-personal/AccountPersonal';
import AccountAwards from '../account-awards/AccountAwards';

const Account = () => {
  return (
    <div className={style['account']}>
      <AccountWorks />
      <AccountPersonal />
      <AccountAwards />
    </div>
  );
}

export default Account;
