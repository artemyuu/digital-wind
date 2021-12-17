import React from 'react';

const AdminFaq = () => {
  return (
    <>
      <div>
        <div className="input-group mb-3">
          <span className="input-group-text">Вопрос</span>
          <input className="form-control" aria-label="With textarea"></input>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Ответ</span>
          <textarea className="form-control" aria-label="With textarea" rows={5}></textarea>
        </div>
        <button className='btn btn-danger'>
          Добавить
        </button>
      </div>
      <hr />
      <table class="table">
      <thead>
        <tr>
          <th scope="col">Вопрос</th>
          <th scope="col">Ответ</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{width: '300px'}}>В какой аудитории находится деканат?</td>
          <td style={{width: '300px'}}>В 424. Это в Главном корпусе на четвертом этаже. Помните про обед: с 12:00 до 13:00.</td>
          <td>
            <button className='btn btn-outline-secondary '>Изменить</button>
            <button className='btn btn-danger mx-3'>Удалить</button>
          </td>
        </tr>
        <tr>
          <td style={{width: '300px'}}>Какие предметы ЕГЭ нужно сдавать?</td>
          <td style={{width: '300px'}}>Зависит от направления. На большинство специальностей требуется профильная математика и физика/информатика (на выбор). Но на творческие направления необходимы, например, литература. Подробнее об этом в разделе Абитуриенту.</td>
          <td>
            <button className='btn btn-outline-secondary '>Изменить</button>
            <button className='btn btn-danger mx-3'>Удалить</button>
          </td>
        </tr>
        <tr>
          <td style={{width: '300px'}}>Я потерял пропуск в вуз. Что делать?</td>
          <td style={{width: '300px'}}>В 424. Это в Главном корпусе на четвертом этаже. Помните про обед: с 12:00 до 13:00.</td>
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

export default AdminFaq;
