const allLogins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];


let login = prompt('Введите логин');

const isLoginValid = function (login) {
    if (login.length > 4 && login.length < 16) {
        return true;
    } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return false;
    }

};

const isLoginUnique = function (allLogins, login) {
    if (!allLogins.includes(login)) {
        return true;
    } else {
        alert('Такой логин уже используется!');
        return false;
    }

};

const loginAdd = function (allLogins, login) {
    if (isLoginValid(login) === true && isLoginUnique(allLogins, login) === true) {
        alert('Логин успешно добавлен!');
        allLogins.push(login);
    }
};

loginAdd(allLogins, login);

console.log(allLogins);





