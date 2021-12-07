const USERS = [
  {
    id: 1,
    login: 'test',
    password: 'test',
    name: 'Иван',
    surname: 'Иванов',
    patros: 'Иванович',
    age: 18,
    adress: 'г.Саратов, Саратовская область',
    email: 'mail@yandex.com',
    mobile: '891705432654',
  },
  {
    id: 2,
    login: 'empty',
    password: 'empty',
  }
]

class UserService {
  getUserById = id => USERS.find( user => user.id === id);
  getUsers = () => USERS;
  login = (login, password) => USERS.find( user => ( user.login === login ) && ( user.password === password ) ) || false;
  logout = () => localStorage.removeItem('authUser');
  fillProfile = (id, data) => {
    const userForUpdate = USERS.find( user => user.id === id);
    for(const key in data) {
      userForUpdate[key] = data[key];
    }
    localStorage.setItem('isAuth', JSON.stringify(userForUpdate));
  }
}

export const userService = new UserService();