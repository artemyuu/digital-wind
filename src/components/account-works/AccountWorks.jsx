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
          img         = "work.png"
          title       = "воздушный мир животных и зверей"
          description = "Высоко в небесах существует архипелаг воздушных островов, населенных Эльфеями: крошечными человечками с узорчатыми крыльями..."
      />
      <CardWork 
          img         = "work.png"
          title       = "воздушный мир животных и зверей"
          description = "Высоко в небесах существует архипелаг воздушных островов, населенных Эльфеями: крошечными человечками с узорчатыми крыльями..."
      />
      <CardWork 
          img         = "work.png"
          title       = "воздушный мир животных и зверей"
          description = "Высоко в небесах существует архипелаг воздушных островов, населенных Эльфеями: крошечными человечками с узорчатыми крыльями..."
      />
    </div>
  );
}

export default AccountWorks;
