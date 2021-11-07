import React from 'react';
import style from './Search.module.css';
import search from '../../images/search.svg';

const Search = () => {
  return (
    <div className={style.search}>
      <input className={style["search__input"]} type="search" />
      <button className={style["search__btn"]}><img src={search} alt="search" /></button>
    </div>
  );
}

export default Search;
