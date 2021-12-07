import React, { useState } from 'react';
import { userService } from '../../services/userService';
import style from './AddWorkForm.module.css';



const AddWorkForm = () => {
  const [nameInput, setNameInput] = useState('');
  const [surnameInput, setSurnameInput] = useState('');
  const [patrosInput, setPatrosInput] = useState('');
  const [ageInput, setAgeInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [mobileInput, setMobileInput] = useState('');
  const [adressInput, setAdressInput] = useState('');

  
  const onSubmit = () => {
    userService.fillProfile(authUser.id, {
      name: nameInput,
      patros: patrosInput,
      surname: surnameInput,
      age: ageInput,
      email: emailInput,
      mobile: mobileInput,
      adress: adressInput,
    })
  }

  let authUser = localStorage.getItem('isAuth');
  let isFullProfile = false;
  if(authUser) {
    authUser = JSON.parse(authUser)
    isFullProfile = (
    authUser.name &&
    authUser.surname &&
    authUser.patros &&
    authUser.age &&
    authUser.adress &&
    authUser.mobile && 
    authUser.email && true) || false;
  }

  return (
    <>
      {isFullProfile ? 
        <form className={style["add-work-form"]}>
          <input type="text" placeholder="Название работы*" required/>
          <input type="text" placeholder="Описание работы*" required/>
          <select>
            <option value="" disabled hidden>Выберите категорию</option>
            <option value="">Категория 1</option>
            <option value="">Категория 2</option>
          </select>
          <select>
            <option value="" disabled hidden>Выберите подкатегорию</option>
            <option value="">подкатегория 1</option>
            <option value="">подкатегория 2</option>
          </select>
          <input type="text" placeholder="Адрес проекта*" required/>
          <input type="file" required/>
          <button className="accent-btn">Отправить</button>
        </form>
      : 
      <form className={style["add-work-form"]}>
          <input type="text" placeholder="Имя*" onChange={(e) => setNameInput(e.target.value)} required/>
          <input type="text" placeholder="Фамилия*" onChange={(e) => setSurnameInput(e.target.value)} required/>
          <input type="text" placeholder="Отчество*" onChange={(e) => setPatrosInput(e.target.value)} required/>
          <input type="text" placeholder="Возраст*" onChange={(e) => setAgeInput(e.target.value)} required/>
          <input type="text" placeholder="Email*" onChange={(e) => setEmailInput(e.target.value)} required/>
          <input type="text" placeholder="Мобильный*" onChange={(e) => setMobileInput(e.target.value)} required/>
          <input type="text" placeholder="Адрес*" onChange={(e) => setAdressInput(e.target.value)} required/>
        <button className="accent-btn" onClick={ (e) => { e.preventDefault(); onSubmit(); document.location.reload();} }>Далее</button>
      </form>
      }
    </>
  );
}

export default AddWorkForm;
