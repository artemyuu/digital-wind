import React from 'react';
import style from './SectionTitle.module.css';

const SectionTitle = (props) => {
  return (
    <div className={style["section-title"]}>
      <div className="container">
        <h3 className={style["section-title__title"]}>
          {props.title}
        </h3>
      </div>
    </div>
  );
}

export default SectionTitle;
