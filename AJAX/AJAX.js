var ButtonOne = document.querySelector('#DivOne button[id="ButtonOne"]');
var ButtonTwo = document.querySelector('#DivTwo button[id="ButtonTwo"]');
var ButtonThree = document.querySelector('#DivThree button[id="ButtonThree"]');

ButtonOne.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        if (xhr.status === 200) {
            document.querySelector('#DivOne').innerHTML = xhr.responseText;
            document.querySelector('#ButtonOne').innerHTML = alert(xhr.responseText);
        } else {
            console.log("unsuccessful request");
        }
    });
    xhr.addEventListener("error", ajaxError);
    
    xhr.open("GET", "pages/world.html");
    xhr.send();
})

ButtonTwo.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        if (xhr.status === 200) {
            document.querySelector('#DivTwo').innerHTML = xhr.responseText;
        } else {
            console.log("unsuccessful request");
        }
    });
    xhr.addEventListener("error", ajaxError);
    
    xhr.open("GET", "pages/lorem.html");
    xhr.send();
})

ButtonThree.addEventListener('click', function(){
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function(){
        if (xhr.status === 200) {
            document.querySelector('#DivThree').innerHTML = xhr.responseText;
        } else {
            console.log("unsuccessful request");
        }
    });
    xhr.addEventListener("error", ajaxError);
    
    xhr.open("GET", "pages/image.html");
    xhr.send();
})

function ajaxError(event) {
    console.log('error');
}