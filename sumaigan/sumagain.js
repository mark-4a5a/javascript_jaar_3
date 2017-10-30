function sumAgain(number1){
    var count = 0;
    function get(number2){
        return count += number1 + number2;
    }
    return get;
}

var get = sumAgain(3);
var result = get(5);

console.log(result);