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

  const fillOnDbClick = () => {
    console.log(1);
    setNameInput('Иван');
    setSurnameInput('Иванов');
    setPatrosInput('Иванович');
    setAgeInput('18');
    setEmailInput('mail@yandex.ru');
    setMobileInput('891705432654');
    setAdressInput('г.Саратов, Саратовская область');
  }
  
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
      <form className={style["add-work-form"]} onDoubleClick={() => fillOnDbClick()}>
          <input type="text" placeholder="Имя*" value={nameInput} onChange={(e) => setNameInput(e.target.value)} required/>
          <input type="text" placeholder="Фамилия*" value={surnameInput} onChange={(e) => setSurnameInput(e.target.value)} required/>
          <input type="text" placeholder="Отчество*" value={patrosInput} onChange={(e) => setPatrosInput(e.target.value)} required/>
          <input type="text" placeholder="Возраст*" value={ageInput} onChange={(e) => setAgeInput(e.target.value)} required/>
          <input type="text" placeholder="Email*" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required/>
          <input type="text" placeholder="Мобильный*" value={mobileInput} onChange={(e) => setMobileInput(e.target.value)} required/>
          <input type="text" placeholder="Адрес*" value={adressInput} onChange={(e) => setAdressInput(e.target.value)} required/>
        <button className="accent-btn" onClick={ (e) => { e.preventDefault(); onSubmit(); document.location.reload();} }>Далее</button>
      </form>
      }
    </>
  );
}

export default AddWorkForm;
