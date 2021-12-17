import React from 'react';

const AdminNews = () => {
  return (
    <>
      <div className="input-group mb-3">
        <span className="input-group-text">Заголовок</span>
        <input className="form-control" aria-label="With textarea"></input>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Содержание</span>
        <textarea className="form-control" aria-label="With textarea" rows={3}></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Дата</span>
        <input type="date" className="form-control" aria-label="With textarea"></input>
      </div>
      <div class="input-group mb-3">
        <label class="input-group-text">Изображение</label>
        <input type="file" class="form-control"/>
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-outline-danger" type="button">Добавить</button>
      </div>
      <hr />
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Заголовок</th>
          <th scope="col">Дата</th>
          <th scope="col">Ссылка</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{width: '300px'}}>Идет набор на обучение по программе профессиональной переподготовки «Цифровой дизайн»</td>
          <td>20.09.2019</td>
          <td><a href="/digital-wind/news/1">http://digital-wind/news/1</a></td>
          <td>
            <button className='btn btn-outline-secondary '>Изменить</button>
            <button className='btn btn-danger mx-3'>Удалить</button>
          </td>
        </tr>
        <tr>
          <td style={{width: '300px'}}>«Мультивидеопортал молодёжи для молодёжи ЮНПРЕСС»</td>
          <td>02.08.2020</td>
          <td><a href="#">http://digital-wind/news/2</a></td>
          <td>
            <button className='btn btn-outline-secondary '>Изменить</button>
            <button className='btn btn-danger mx-3'>Удалить</button>
          </td>
        </tr>
        <tr>
          <td style={{width: '300px'}}>«Функции прессы в России и за её пределами»</td>
          <td>22.09.2019</td>
          <td><a href="#">http://digital-wind/news/3</a></td>
          <td>
            <button className='btn btn-outline-secondary '>Изменить</button>
            <button className='btn btn-danger mx-3'>Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
    </>
  );
}

export default AdminNews;
