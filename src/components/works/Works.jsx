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
          img         = "works/earth.jpg"
          title       = "Моя Земля"
          description = "Земля — третья по удалённости от Солнца планета Солнечной системы.  Единственное известное человеку тело Солнечной системы, населённое живыми организмами. Пусть Землю всегда освещает Солнце!"
        />
        <CardWork 
          img         = "works/glazik.jpg"
          title       = "Милоглазик"
          description = "Мой Милоглазик живет в сказочном лесу рядом с водопадом. Спит на деревьях и питается фантастическими фруктами."
        />
        <CardWork 
          img         = "works/vr.jpg"
          title       = "По ту сторону экрана"
          description = "На работе я показала, как человек погружается в виртуальную реальность. Виртуальная реальность помогает испытать новые возможности, от умения летать до возможности дышать под водой."
        />
      </div>
      {props.showLink === true ? <a className="page-link" href="#">Все работы</a> : ''}
    </div>
  );
}

export default Works;
