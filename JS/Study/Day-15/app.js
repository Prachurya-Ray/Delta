console.log("Hello JavaScript");
let a=8;
let b=6;
// console.log("Sum is :", a+b, " in total");
// console.log('Hello');
console.log(`The total price is ${a+b} rupees`);
// console.log("hello",'world')

a=2;
switch(a){
    case 1:console.log("pass");
        
    case 2:console.log("fail");
    
    default:console.log("fine");

}

alert("Something is not right!");
console.error("There is something wrong");
console.warn("This is a warning");
// let name=prompt("Enter your name:");
// let name1=prompt("Enter your name:");

// console.log("Welcome",name,name1);



let userName=prompt("Enter your name:");
let age=prompt("Enter your age:");
alert(`${userName} is ${age} years old`);



let first=prompt("Enter first number:");
let second=prompt("Enter second");
if(first[first.length-1]==second[second.length-1]){
    alert(`Both ${first} and ${second} are same`);
}
else{
    alert("They are not the same");
}