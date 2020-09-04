// 20, 50, 80, 130 - значения на замену в order


let total = 100;
const order = 130;

if (total >= order) {
  total = `Заказ оформлен, с вами свяжется менеджер`;
} else {
    total = `На складе недостаточно твоаров!`;
  }

console.log(total);