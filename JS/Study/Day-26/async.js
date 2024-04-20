async function greet(){
    return 'Hello';
}

greet()
    .then((result)=>{
        console.log("Success");
        console.log(result);
    })
    .catch((error)=>{
        console.log("Error:", error);
    });
