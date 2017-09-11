var result1 = factorial(5);
console.log(result1);

var result2 = factorial(8);
console.log(result2);

var result3 = factorial(1);
console.log(result3);

var result4 = factorial(0);
console.log(result4);

var result5 = factorial(-1);
console.log(result5);

function factorial(inputNumber){
    if(inputNumber >= 0){
        var total = 1;
        for (i = 0; i < inputNumber; i++){
            total = total * (inputNumber - i);
        }
        return total;
    }else{
        return 'Gamma-functie niet gedefiniëerd voor negative getallen';
    }
}