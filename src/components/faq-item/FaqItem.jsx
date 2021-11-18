import React from 'react';
import style from './FaqItem.module.css';

const FaqItem = (props) => {
  return (
  <details className={style["faq-item"]}>
      <summary className={style["faq-item__title"]}>{props.title}</summary>
      <p className={style["faq-item__inner"]}>{props.inner}</p>
  </details>
  );
}

export default FaqItem;
