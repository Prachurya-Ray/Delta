function evenOrOdd(val){
    if (val=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else if(val=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else
        console.log("Wrong Input");
}

let request=prompt("even or odd?");
let sol = evenOrOdd(request);
let n=prompt("Enter value");
sol(n);
