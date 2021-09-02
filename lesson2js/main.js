'use strict';
// let userNumber, resultsStr;
// userNumber = +prompt('Введите число','10');
// if (userNumber > 5) resultsStr = 'Число '+ userNumber + ',больше 5';
// else resultsStr = 'Число ' + userNumber + ' не больше 5';
// alert(resultsStr);

// resultsStr=(userNumber>5)?'Число '+userNumber+' больше 5' 
// :'Число '+userNumber+' не больше 5';
// alert(resultsStr);

// let experiment = (5<2)||('')||(0);
// alert(experiment);

/*// SWICH Задание 1 
// let numberMonth, nameMonth;

// numberMonth = +prompt('Введите номер месяца');
// switch (numberMonth) {
//     case 1: nameMonth = 'Январь';
//     break;
//     case 2: nameMonth = 'Февраль';
//     break;
//     case 3: nameMonth = 'Март';
//     break;
//     case 4: nameMonth = 'Апрель';
//     break;
//     case 5: nameMonth = 'Май';
//     break;
//     case 6: nameMonth = 'Июнь';
//     break;
//     case 7: nameMonth = 'Июль';
//     break;
//     case 8: nameMonth = 'Август';
//     break;
//     case 9: nameMonth = 'Сентябрь';
//     break;
//     case 10: nameMonth = 'Октябрь';
//     break;
//     case 11: nameMonth = 'Ноябрь';
//     break;
//     case 12: nameMonth = 'Декабрь';
//     break;
//     default: nameMonth = 'Такого месяца нет'
// }
// alert(nameMonth); */

/*// Задание 2
// let firstNumber, secondNumber, oprenad, resultNumber;
// firstNumber = +prompt('Введите первое число');
// secondNumber = +prompt('Введите второе число');
// oprenad = prompt('Введите символ операции между ними');
// switch (oprenad) {
//     case '+': resultNumber = firstNumber + secondNumber;
//     break;
//     case '-': resultNumber = firstNumber - secondNumber;
//     break;
//     case '*': resultNumber = firstNumber * secondNumber;
//     break;
//     case '/': resultNumber = firstNumber / secondNumber;
//     break;
//     default: resultNumber = 'Вы ввели несуществующую операцию'
// }
// alert(resultNumber);*/

// задание 1
// let firstNumber, secondNumber;
// firstNumber = +prompt('Введите первое число');
// secondNumber = +prompt('Введите второе число');
// firstNumber > secondNumber ? alert(firstNumber) : alert(secondNumber);

// Задание 2
// let userNumber = +prompt ('Введите число');
// (userNumber % 5) ? alert('Число не кратно 5') : alert('Число кратное 5');

// Задание 3
// let namePlanet = prompt('С какой вы планеты?');
// (namePlanet == 'Земля'|| namePlanet == 'земля' )? alert('Привет, Землянин') : alert('Привет, инопланетянин');

// Циклы. While задание 1
// let nameRepeat = +prompt('Введите число');
// let i = 0;
// let resultString='';
// while (i<nameRepeat) {
//     resultString +='#';
//     i++;
// }
// alert(resultString);

// Задание 2
// let userAnswer;
// do {
//     userAnswer = +prompt('Сколько будет 2+2*2?');

// }
// while (userAnswer !== 6);
// alert ('Правильно!');

// FOR задание 1
let userNumber = +prompt ('Введите число');
let resultString ='';
for (let i=1; i<=100; i++) {
    if (!(i % userNumber)) resultString += `${i}, `;
}
alert(resultString);