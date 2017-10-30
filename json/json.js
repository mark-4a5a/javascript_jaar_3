var xhr = new XMLHttpRequest();

xhr.addEventListener("load", function(){
    if (this.status === 200) {
            console.log(this.responseText);
    } else {
        console.log("Unsuccessful request");
    }
});
xhr.addEventListener("error", ajaxError);
    
xhr.open("GET", "studens.json");
xhr.send();

function ajaxError(event) {
    console.log('Error');
}