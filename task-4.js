const credits = 23580;
const pricePerDroid = 3000;
let buyCount = prompt(`Сколько дроидов вы хотите купить?`);
let totalPrice = pricePerDroid*buyCount;

if (buyCount == null) {
    alert('Отменено пользователем!')
} else if (credits >=totalPrice) {
    console.log(`Вы купили ${buyCount} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
} else {
    console.log(`Недостаточно средств на счету!`);
}



 