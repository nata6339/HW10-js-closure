function sum(x) {
    return  function(y) {
        return x + y;
    };
}
const sum1 = sum(1);
console.log(sum1(2));
console.log (sum(1)(2));

console.log("=================== #4")

// Код не верный, так как сначала выполнится цикл, 'i' - примет значение 10, а потом таймаут вернет нам 10 раз преобретенное в цикле значение i.

for (let i = 0; i < 10; i++) {
    setTimeout(range(i), 0);// функция для ссылки;
}
function range(i){//объявление "i" за пределами цикла, что бы аргумент принимался не из цикла;
    return function() { //возврат новой функции.
        console.log(i+1)
    };
}



