import React from 'react';
import { Route, Routes, useLocation } from 'react-router';
import AdminHeader from './components/AdminHeader';
import AdminApplications from './pages/admin-applications/AdminApplications';

import style from './AdminModule.module.css';
import AdminCMS from './pages/admin-cms/AdminCMS';
import { Link } from 'react-router-dom';
import AdminWorkReg from './pages/admin-work-reg/AdminWorkReg';
import AdminUserReg from './pages/admin-user-reg/AdminUserReg';
import AdminUser from './pages/admin-users/AdminUser';
import AdminNews from './pages/admin-news/AdminNews';

const AdminModule = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/")[3];

  return (
    <>
      <AdminHeader />
      <div className={style['admin-app']}>
        <div className={"container-1200 " + style['admin-flex']}>
          <ul className={style["admin-menu"]}>
            <li className={style["admin-menu__link"]}>
             <Link  to="/digital-wind/admin/applications" className={ splitLocation === 'applications' ? style["active"] : ''}>Заявки</Link>
            </li>
            <li className={style["admin-menu__link"]}>
              <Link to="/digital-wind/admin/cms" className={ splitLocation === 'cms' ? style["active"] : ''}>Система управления контентом</Link>
            </li>
            <li className={style["admin-menu__link"]}>
              <Link to="/digital-wind/admin/news" className={ splitLocation === 'news' ? style["active"] : ''}>Управление новостями</Link>
            </li>
            <li className={style["admin-menu__link"]}>
              <Link to="/digital-wind/admin/reg-work" className={ splitLocation === 'reg-work' ? style["active"] : ''}>Регистрация работы</Link>
            </li>
            <li className={style["admin-menu__link"]}>
              <Link to="/digital-wind/admin/user-reg" className={ splitLocation === 'user-reg' ? style["active"] : ''}>Регистрация личного кабинета</Link>
            </li>
            <li className={style["admin-menu__link"]}>
              <Link to="/digital-wind/admin/users" className={ splitLocation === 'users' ? style["active"] : ''}>Модерация пользователей</Link>
            </li>
          </ul>
          <div className={style['admin-content'] + ' custom-scroll'}>
            <Routes>
              <Route path="/digital-wind/admin/applications" element={<AdminApplications/>} />
              <Route path="/digital-wind/admin/cms" element={<AdminCMS/>} />
              <Route path="/digital-wind/admin/news" element={<AdminNews/>} />
              <Route path="/digital-wind/admin/reg-work" element={<AdminWorkReg/>} />
              <Route path="/digital-wind/admin/user-reg" element={<AdminUserReg/>} />
              <Route path="/digital-wind/admin/users" element={<AdminUser/>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminModule;
