function multipleGreet(greet, n) {
    for(let i=1; i<=n; i++){
        greet();
    }
}

let greet=function(){
    console.log("Hello");
}

multipleGreet(greet,2);