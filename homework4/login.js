const users = [
  {
    name: 'John',
    login: 'shazam',
    password: 'qwerty',
  },
  {
    name: 'Alice',
    login: 'cat',
    password: 'asdfg',
  },
];

var login;
var password;

function getLogin() {
  return login = prompt('Enter your login'),
  password = prompt('Enter your password');
};

function checkLogin(login, password) {
  var nowUser = users.find(admin => admin.login === login);

  if (nowUser != undefined && nowUser.password == password) {
    return alert('Welcome, ' + nowUser.name);
  };
  return alert('Ошибка авторизации');
};

getLogin();
checkLogin(login, password);
