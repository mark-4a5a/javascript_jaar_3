var numbers = [2, 6, 11, 5, 9, 8, 3, 46, 4];

function calculate(item, index, arr){
    var lastValue = arr[arr.length - 1];
    if (lastValue == item){
        console.log("Item " + index + " = " + arr[index])
    } else {
        var sum = arr[index] + arr[index + 1];
        console.log("Item " + index + " = " + sum)
    }
}

numbers.forEach(calculate);