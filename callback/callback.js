function useBar(callback) {
    callback(1);
    callback(2);
    callback(3);
}
function bar(sentence) {
    console.log(sentence);
}
useBar(bar);