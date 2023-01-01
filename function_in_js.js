// declaring a function named greet()
/*function greet() {
    console.log("Hello there");
}
greet()*/
//name input
// program to print the text
// declaring a function
/*const prompt=require("prompt-sync")({sigint:true}); 
function greet(name) {
    console.log("Hello " + name + ":)");
}

// variable name can be different
let name = prompt("Enter a name: ");

// calling function
greet(name);*/
//with perameter
/*function number(n1 , n2){
    var result
    result = n1 + n2
    console.log(result)
}
number(10,20)*/
//with perameter and return
function number(n1 , n2){
    var result
    result = n1 + n2
    return result
}
console.log(number(10,20))
