import React from 'react';
import CardWork from '../card-work/CardWork';
import style from './Works.module.css';

const Works = (props) => {
  return (
    <div className="container">
      <div className={style["works"]}>
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
      {props.showLink === true ? <a className="page-link" href="#">Все работы</a> : ''}
    </div>
  );
}

export default Works;
