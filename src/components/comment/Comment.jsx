import React from 'react';
import style from './Comment.module.css';

const Comment = (props) => {
  return (
    <div className={style["comment"]}>
      <div className={style["comment-header"]}>
        <span className={style["comment-author"]}>
          <b>{props.author}</b>
        </span>
        <span className={style["comment-date"]}>
          <i>{props.date}</i>
        </span>
      </div>
      <p className={style["comment-body"]}>
        {props.body}
      </p>
    </div>
  );
}

export default Comment;
