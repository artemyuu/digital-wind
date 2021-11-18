import React from 'react';
import style from './FilterBar.module.css';

const FilterBar = () => {
  return (
    <div className={style["filter-bar"]}>
      <input type="text" placeholder="Введите название работы" />
      <select name="" id="">
        <option value="" selected disabled hidden>
          Выберите категорию
        </option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
      <select name="" id="">
        <option value="" selected disabled hidden>
          Выберите подкатегорию
        </option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </select>
      <select name="" id="">
        <option value="" selected disabled hidden>
          Выберите возраст
        </option>
        <option value="1">
          One
        </option>
        <option value="2">
          Two
        </option>
      </select>
      <button>
        Применить
      </button>
    </div>
  );
}

export default FilterBar;
