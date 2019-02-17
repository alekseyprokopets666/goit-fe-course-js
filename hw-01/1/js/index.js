const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const error = 'Доступ запрещен, неверный логин!';
const cancel = 'Отменено пользователем!';

let inputLogin = prompt('Введите login');

if (inputLogin === adminLogin) {
    let inputPassword = prompt('Введите password');
    if (inputPassword === adminPassword) {
        alert('Добро пожаловать!');

    } else if (inputPassword === null) {
        alert(cancel);
    } else {
        alert(error);
    }
} else if (inputLogin === null) {
    alert(cancel);
} else {
    alert(error);
}