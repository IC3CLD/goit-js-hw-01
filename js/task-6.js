let input = confirm(`Введите число`);
let total = 0;

// while (input) {
// input = +prompt();
// total += input;
// }
// alert (`Общая сумма чисел равна ${total} `);

// input = prompt();
// while (input !== null) {
//   if (isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     input = prompt();
//   } else {
//     input = +input;
//     total += input;
//     input = prompt();
//   }
// }
// alert(`Общая сумма чисел равна ${total} `);

do {
    input = prompt ();
     if (isNaN(input)){
        alert ('Было введено не число, попробуйте еще раз');
    } else {
        total += +input;
    }   
}while (input !== null);
alert (`Общая сумма чисел равна ${total} `);


