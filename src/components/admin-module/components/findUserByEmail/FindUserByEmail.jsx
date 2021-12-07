import React, { useState } from 'react';
import { userService } from '../../../../services/userService';

const FindUserByEmail = (props) => {
  const { toggleIsExistUser, isExistUser } = props;
  const options = userService.getUsers()
                             .filter( user => !!user.email)
                             .map( (user, index) => <option key={index} value={`${user.email} (${user.name} ${user.patros} ${user.surname})`} />);
  const [ findedUser, setFindedUser ] = useState({});
  return (
    <div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onChange={ (e) => { toggleIsExistUser(); if(findedUser.id) setFindedUser({})} } />
        <label className="form-check-label" >Существующий пользователь</label>
      </div>
      { !isExistUser ?
      <div className="input-group mt-3">
        <input list="ice-cream-flavors" onChange={(e) => { const user = userService.getUserById(1); setFindedUser(user);}} className="form-control" id="ice-cream-choice" name="ice-cream-choice" placeholder="Поиск пользователя по email" autoComplete="off"/>
        <datalist id="ice-cream-flavors">
            {options}
        </datalist>
      </div>
      : ""
      }
      { isExistUser ? 
              <>
              <div className="d-flex">
                <div style={{width: '50%', marginRight: '20px'}}>
                  <div className="input-group mt-3">
                    <span className="input-group-text" id="basic-addon1">ФИО</span>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mt-3">
                    <span className="input-group-text" id="basic-addon1">Возраст</span>
                    <input type="text" className="form-control"  aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mt-3">
                    <span className="input-group-text" id="basic-addon1">Адрес</span>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mt-3">
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mt-3">
                    <span className="input-group-text" id="basic-addon1">Телефон</span>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                </div>
                <div style={{width: '50%'}}>
                  <div className="input-group mt-3">
                    <span className="input-group-text" id="basic-addon1">Название работы</span>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mt-3">
                    <span className="input-group-text" id="basic-addon1">Описание работы</span>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mt-3">
                    <label className="input-group-text">Категория</label>
                    <select className="form-select" style={{marginBottom: '0'}}>
                      <option value="" disabled hidden>Выберите категорию</option>
                      <option value="">Категория 1</option>
                      <option value="">Категория 2</option>
                    </select>
                  </div>
                  <div className="input-group mt-3">
                    <label className="input-group-text">Подкатегория</label>
                    <select className="form-select" style={{marginBottom: '0'}}>
                      <option value="" disabled hidden>Выберите подкатегорию</option>
                      <option value="">подкатегория 1</option>
                      <option value="">подкатегория 2</option>
                    </select>
                  </div>
                  <div className="input-group mt-3">
                    <span className="input-group-text" id="basic-addon1">Адрес проекта</span>
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" autoComplete="off"/>
                  </div>
                  <div className="input-group mt-3">
                    <input type="file" className="form-control" id="inputGroupFile01"/>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-outline-danger w-100 mt-3">Зарегистрировать работу</button>
              </>
              : ''

      }
      { !isExistUser && findedUser.id ?
        <>
        <div className="d-flex">
          <div style={{width: '50%', marginRight: '20px'}}>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">ФИО</span>
              <input type="text" className="form-control" value={`${findedUser.name} ${findedUser.patros} ${findedUser.surname}`} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">Возраст</span>
              <input type="text" className="form-control"  value={findedUser.age} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">Адрес</span>
              <input type="text" className="form-control"  value={findedUser.adress} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">Email</span>
              <input type="text" className="form-control" value={findedUser.email} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">Телефон</span>
              <input type="text" className="form-control"  value={findedUser.mobile} aria-label="Username" aria-describedby="basic-addon1" disabled/>
            </div>
          </div>
          <div style={{width: '50%'}}>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">Название работы</span>
              <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">Описание работы</span>
              <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mt-3">
              <label className="input-group-text">Категория</label>
              <select className="form-select" style={{marginBottom: '0'}}>
                <option value="" disabled hidden>Выберите категорию</option>
                <option value="">Категория 1</option>
                <option value="">Категория 2</option>
              </select>
            </div>
            <div className="input-group mt-3">
              <label className="input-group-text">Подкатегория</label>
              <select className="form-select" style={{marginBottom: '0'}}>
                <option value="" disabled hidden>Выберите подкатегорию</option>
                <option value="">подкатегория 1</option>
                <option value="">подкатегория 2</option>
              </select>
            </div>
            <div className="input-group mt-3">
              <span className="input-group-text" id="basic-addon1">Адрес проекта</span>
              <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" autoComplete="off"/>
            </div>
            <div className="input-group mt-3">
              <input type="file" className="form-control" id="inputGroupFile01"/>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-outline-danger w-100 mt-3">Зарегистрировать работу</button>
        </>
        :
        ""
      }
    </div>
  );
}

export default FindUserByEmail;
