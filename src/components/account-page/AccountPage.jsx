import style from './AccountPage.module.css';

import React from 'react';
import SectionTitle from '../section-title/SectionTitle';
import Account from '../account/Account';

const AccountPage = () => {
  return (
    <>
      <SectionTitle title="Личный кабинет"/>
      <div className="container">
        <Account />
      </div>
    </>
  );
}

export default AccountPage;
