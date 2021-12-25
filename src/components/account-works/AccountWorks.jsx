import React from 'react';
import CardWork from '../card-work/CardWork';
import style from './AccountWorks.module.css';

const AccountWorks = () => {
  return (
    <div className={style['account-works'] + ' custom-scroll'}>
      <h2 className={style['account-works__title']}>Опубликованные работы</h2>
      <CardWork 
          img         = "work.png"
          title       = "воздушный мир животных и зверей"
          description = "Высоко в небесах существует архипелаг воздушных островов, населенных Эльфеями: крошечными человечками с узорчатыми крыльями..."
        />
        <CardWork 
          img         = "works/earth.jpg"
          title       = "Моя Земля"
          description = "Земля — третья по удалённости от Солнца планета Солнечной системы.  Единственное известное человеку тело Солнечной системы, населённое живыми организмами. Пусть Землю всегда освещает Солнце!"
        />
        <CardWork 
          img         = "works/glazik.jpg"
          title       = "Милоглазик"
          description = "Мой Милоглазик живет в сказочном лесу рядом с водопадом. Спит на деревьях и питается фантастическими фруктами."
        />
    </div>
  );
}

export default AccountWorks;
