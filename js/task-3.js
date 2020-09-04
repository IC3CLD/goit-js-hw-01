const ADMIN_PASSWORD = 'jqueryismyjam';
let password = prompt(`Введите пароль:`);
if (password) {
    password == ADMIN_PASSWORD
    ? alert('Добро пожаловать!')
    : alert('Доступ запрещен, неверный пароль!')
} else {
    alert('Отменено пользователем!')
}