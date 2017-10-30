var array = [];
document.addEventListener("keypress", rainbow);
function rainbow() {
  array.push(String.fromCharCode(event.keyCode));
     if(array.toString().replace(/,/g,'').includes("cornify")) {
     cornify_add();
    }
}