import React from 'react';

const AdminJuryAll = (props) => {
  const { switchArray } = props; 
  const { allWorks,
          setAllWorks,
          winnerWorks,
          setWinnerWorks,
          asideWorks,
          setAsideWorks,
        } = props.worksProps;
        
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
            <th scope="col">Средний балл</th>
            <th scope="col">Изображение</th>
            <th scope="col">Ссылка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            allWorks.map( work => {
              return (
                <tr key={work.id}>
                  <td>{work.title}</td>
                  <td>{work.mark}</td>
                  <td><img src={work.img} style={{width: '200px', objectFit: 'none'}}/></td>
                  <td>
                    <a href={work.link}
                    style={{display: 'inline-block',width: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}
                    >
                      http://digital-wind/catalog/1
                    </a>
                  </td>
                  <td style={{width: '250px'}}>
                    <button className='btn btn-outline-secondary mx-2' onClick={() => switchArray(allWorks, asideWorks, setAllWorks, setAsideWorks, work.id)}>Отложить</button>
                    <button className='btn btn-success' onClick={() => switchArray(allWorks, winnerWorks, setAllWorks, setWinnerWorks, work.id)}>В призовые</button>
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

export default AdminJuryAll;
