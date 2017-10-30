function select(element){
    var selector = document.querySelectorAll(element);
    return function (name, value){
        selector.forEach(function(value, index, array){
            selector[index]
        })
    }
}

var setLinksAttr = select('a');
setLinksAttr('target','_blank');