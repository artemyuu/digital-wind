import React, { useState } from 'react';

const AdminJuryWinners = (props) => {
  const { switchArray } = props;

  const { 
    allWorks,
    setAllWorks,
    winnerWorks,
    setWinnerWorks,
    asideWorks,
    setAsideWorks,
  } = props.worksProps;

  const setPlace = (id, place) => {
    const winnerToUpdate = winnerWorks.find( work => work.id === id);
    winnerToUpdate.place = place;
    setWinnerWorks([...winnerWorks]);
  }

  return (
    <>
      <div className='d-flex justify-content-between jury-filter align-items-start my-2'>
        <input type="text" className="form-control" style={{flex: "1", marginRight: "0.5rem"}} placeholder="Название работы" />
        <select className="form-select mx-2" style={{flex: ".6"}} name="" id="">
          <option value="" selected disabled hidden>
            Категория
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
        <select className="form-select mx-2" style={{flex: ".7"}} name="" id="">
          <option value="" selected disabled hidden>
            Подкатегория
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
        </select>
        <select className="form-select mx-2" style={{flex: ".4"}} name="" id="">
          <option value="" selected disabled hidden>
            Возраст
          </option>
          <option value="1">
            One
          </option>
          <option value="2">
            Two
          </option>
        </select>
        <button className='btn btn-outline-danger' style={{flex: ".8"}}>
          Применить
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Ссылка</th>
            <th scope="col">Место</th>
            <th scope="col">Контакты</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            winnerWorks.map( work => {

              return (
                <tr key={work.id}>
                  <td>{work.title}</td>
                  <td>
                    <a href={work.link}
                    style={{display: 'inline-block',width: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}
                    >
                      http://digital-wind/catalog/1
                    </a>
                  </td>
                  <td>
                    <span class="badge bg-danger rounded-pill">
                      <input type="text" value={work.place ? work.place : ''} style={{ 
                        backgroundColor: "rgba(var(--bs-danger-rgb), var(--bs-bg-opacity))",
                        outline: "none",
                        border: "none",
                        width: "10px",
                        color: "white",
                        }
                      } 
                      onChange={(e) => setPlace(work.id, e.target.value) }
                      />
                    </span>
                  </td>
                  <td>
                    {work.contacts.email} <br/>
                    {work.contacts.mobile}
                  </td>
                  <td style={{width: '336px'}}>
                    <button className='btn btn-outline-secondary mx-2' onClick={() => {
                      const winnerForDelete = winnerWorks.find(winner => winner.id === work.id);
                      delete winnerForDelete.place;
                      switchArray(winnerWorks, allWorks, setWinnerWorks, setAllWorks, work.id);
                    }
                    }>Убрать из призовых</button>
                    <button className='btn btn-success' onClick={() => switchArray(allWorks, winnerWorks, setAllWorks, setWinnerWorks, work.id)}>Подтвердить</button>
                  </td>
                </tr>  
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default AdminJuryWinners;
