import { React, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdminJuryAll from '../admin-jury-all/AdminJuryAll';
import AdminJuryAside from '../admin-jury-aside/AdminJuryAside';
import AdminJuryWinners from '../admin-jury-winners/AdminJuryWinners';

import './AdminJury.css';

const AdminJury = () => {
  const location = useLocation();
  const { pathname } = location;
  const subroute = pathname.split('/')[pathname.split('/').length-1];

  const [allWorks, setAllWorks] = useState([
    {
      id: 1,
      title: 'Воздушный мир',
      mark: 4.8,
      img: require('../../../../images/work.png').default,
      link: '/digital-wind/catalog/1',
      contacts: {
        email: 'mv.wwe2lka@mail.com',
        mobile: '8982394111'
      }
    },
    {
      id: 2,
      title: 'Милоглазик',
      mark: 3.7,
      img: require('../../../../images/works/glazik.jpg').default,
      link: '/digital-wind/catalog/1',
      contacts: {
        email: 'mishin.vv12@mail.com',
        mobile: '8994394859'
      }
    },
    {
      id: 3,
      title: 'Моя планета',
      mark: 4.1,
      img: require('../../../../images/works/earth.jpg').default,
      link: '/digital-wind/catalog/1',
      contacts: {
        email: 'shishkin123@mail.com',
        mobile: '8980987819'
      }
    },
  ]);

  const [winnerWorks, setWinnerWorks] = useState([]);
  const [asideWorks, setAsideWorks] = useState([]);

  const switchArray = (arrayFrom, arrayIn, setStateFrom, setStateIn, id) => {
    const item = arrayFrom.find(item => item.id === id);
    setStateFrom(arrayFrom.filter(item => item.id !== id));
    setStateIn([item, ...arrayIn]);
  }

  const worksProps = {
    allWorks,
    setAllWorks,
    winnerWorks,
    setWinnerWorks,
    asideWorks,
    setAsideWorks,
  };

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className={`nav-link link ` + (subroute === 'all' ? 'active ' : ' ')} to="/digital-wind/admin/jury/all">Не рассмотренные</Link>
        </li>
        <li className="nav-item">
          <Link className={"nav-link link " + (subroute === 'winners' ? 'active' : '')} to="/digital-wind/admin/jury/winners">Призовые</Link>
        </li>
        <li className="nav-item">
          <Link className={"nav-link link " + (subroute === 'aside' ? 'active' : '')} to="/digital-wind/admin/jury/aside">Отложенные</Link>
        </li>
      </ul>
      <div className='jury-content-container '>
        {
          subroute === 'all' ? <AdminJuryAll worksProps={worksProps} switchArray={switchArray} /> : '' ||
          subroute === 'aside' ? <AdminJuryAside worksProps={worksProps} switchArray={switchArray} /> : '' ||
          subroute === 'winners' ? <AdminJuryWinners worksProps={worksProps} switchArray={switchArray}/> : ''
        }
      </div>
      
    </>
  );
}

export default AdminJury;
