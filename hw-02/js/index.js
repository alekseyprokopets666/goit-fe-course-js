const numbers = [];
let userInput;
let total = 0;

do {
    userInput = prompt('Введите числа!');
    if (!isNaN(userInput)){
        numbers.push(Number(userInput));
    }else{
        alert('Было введено не число, попробуйте еще раз');
    }
} while (userInput !== null)

numbers.pop();

for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
if (numbers.length !== 0) {
    alert('Общая сумма чисел равна ' + total);
}else{
    alert('Массив пустой!')
}


