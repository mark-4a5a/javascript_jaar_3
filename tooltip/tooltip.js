var listItems = document.querySelectorAll("ul[data-show-oddeven] li");
listItems.forEach(function(element, index){
    if(index % 2 === 0){
        element.title = "Odd";
    }else{
        element.title= "Even";
    }
});