import React from 'react';
import logo from '../../../images/logo.png';
import style from './AdminHeader.module.css';

const AdminHeader = () => {
  return (
  <header className="p-3 bg-white shadow">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <img src={logo} alt="" />
        <h1 className={"fs-2 mb-0 ms-3 pt-2 " + style["admin-header-title"]}>Админ-панель</h1>
    </div>
  </header>
  );
}

export default AdminHeader;
