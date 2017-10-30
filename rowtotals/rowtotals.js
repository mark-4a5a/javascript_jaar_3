rowTotals = [
    [9, 21, 14],
    [11, 5, 27],
    [29, 17, 6]
];

function count(row){
    rowTotal = rowTotals[row];
    console.log(rowTotal);
    answer = 0;
    for(i = 0; i < rowTotal.length; i++){
        answer = answer + rowTotals[row][i];
        console.log(answer);
    }
}

count(0);