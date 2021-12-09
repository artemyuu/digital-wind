import React from 'react';
import { userService } from '../../../../services/userService';

const AdminUserReg = () => {
  const options = userService.getUsers()
  .filter( user => !!user.email)
  .map( (user, index) => <option key={index} value={`${user.email} (${user.name} ${user.patros} ${user.surname})`} />);
  
  return (
    <>
      <div className="input-group mt-3">
        <input list="ice-cream-flavors" className="form-control" id="ice-cream-choice" name="ice-cream-choice" placeholder="Поиск пользователя по email" autoComplete="off"/>
        <datalist id="ice-cream-flavors">
            {options}
        </datalist>
      </div>
      <div className="input-group mt-3">
        <span className="input-group-text" id="basic-addon1">Логин</span>
        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <div className="input-group mt-3">
        <span className="input-group-text" id="basic-addon1">Пароль</span>
        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <button className="btn btn-outline-danger mt-3">Зарегистрировать личный кабинет</button>
    </>
  );
}

export default AdminUserReg;
