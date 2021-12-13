import React from 'react';
import { useState } from 'react';

const AdminUser = () => {
  const [ filters, setFilters ] = useState(
    {
      publication: false,
      innerMark: false,
      outerMark: false,
    }
  ) 
  const [userTable, setUserTable] = useState([
    {
      user: 'Иван Иванович Иванов (mail@yandex.ru)',
      countPublications: 3,
      outerMarks: 4,
      countOuterMarks: 3,
      innerMarks: 4,
      countInnerMarks: 1,
    },
    {
      user: 'Алексей Иванович Филимонов (filimon@yandex.ru)',
      countPublications: 100,
      outerMarks: 1,
      countOuterMarks: 26,
      innerMarks: 2,
      countInnerMarks: 90,
    },
    {
      user: 'Федор Иванович Данилов (daniloff@yandex.ru)',
      countPublications: 12,
      outerMarks: 4.5,
      countOuterMarks: 5,
      innerMarks: 4.8,
      countInnerMarks: 12,
    },
  ])

  const filter = (filterParam, field) => {
    setUserTable([...userTable].sort( (a, b) => filters[filterParam] ? b[field] - a[field] : a[field] - b[field]));
    setFilters({...filters, [filterParam]: !filters[filterParam]});
  }

  return (
    <>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Пользователь</th>
          <th scope="col">
            Кол-во публикаций
            <span onClick={() => filter('publication', 'countPublications')} className="badge bg-secondary" style={{display: 'inline', position: 'relative', left: '15px', bottom: '15px', cursor: 'pointer'}}>
              &#9947;
            </span>
          </th>
          <th scope="col">
            Оценки от пользователя
            <span onClick={() => filter('outerMark', 'outerMarks')} className="badge bg-secondary" style={{display: 'inline', position: 'relative', left: '15px', bottom: '15px', cursor: 'pointer'}}>
              &#9947;
            </span>
            </th>
          <th scope="col">
            Оценки пользователю
            <span onClick={() => filter('innerMark', 'innerMarks')} className="badge bg-secondary" style={{display: 'inline', position: 'relative', left: '15px', bottom: '15px', cursor: 'pointer'}}>
              &#9947;
            </span>
            </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
          {userTable.map( user => 
            <tr>
              <td>{user.user}</td>
              <td>{user.countPublications}</td>
              <td>{user.outerMarks + ` (${user.countOuterMarks})`}</td>
              <td>{user.innerMarks + ` (${user.countInnerMarks})`}</td>
              <td>
                <button onClick={() => setUserTable(
                  userTable.filter( el => el.user !== user.user)
                )} className='btn btn-danger'>Заблокировать</button>
              </td>
            </tr>
          )}
      </tbody>
    </table>
    </>
  );
}

export default AdminUser;
