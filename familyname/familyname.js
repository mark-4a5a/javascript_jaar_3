function getFamilyName(lastName){
    return function (firstName, add){
        return add + " " + firstName + " " + lastName;
    }
}

var showRockefeller = getFamilyName("Rockefeller");
var showJackson = getFamilyName("Jackson");

console.log(showRockefeller("John", "My full name is"));
console.log(showRockefeller("David", "My full name is"));

console.log(showJackson("Michael", "My full name is"));
console.log(showJackson("Janet", "My full name is"));