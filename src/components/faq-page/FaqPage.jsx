import React from 'react';
import Faq from '../faq/Faq';
import SectionTitle from '../section-title/SectionTitle';
import style from './FaqPage.module.css';

const FaqPage = () => {
  return (
    <>
     <SectionTitle title="FAQ" /> 
     <div className="container">
       <h2 className={style["faq-page-title"]}>Часто задаваемые вопросы</h2>
       <p className={style["faq-page-subtitle"]}>Здесь Вы можете найти ответы на возникшие вопросы</p>
       <Faq />
     </div>
    </>
  );
}

export default FaqPage;
