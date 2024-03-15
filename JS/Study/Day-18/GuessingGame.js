let max=prompt("Enter maximum value");
let randNum=Math.ceil(Math.random()*max);
let num=prompt("Guess the number")
while(true){
    if(num=='quit'){
        console.log("User Quit");
        break;
    }
    else if(num==randNum){
        console.log(`Correct: ${num}`);
        break;
    }
    else if(num<randNum){
        num=prompt("Hint: Wrong Input. Please guess bigger");
    }
    else{
        num=prompt("Hint: Wrong Input. Please guess smaller");
    }
}