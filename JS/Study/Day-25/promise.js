function saveToDB(data){
    return new Promise((resolve, reject)=>{
        let iSpeed=Math.floor(Math.random()*10)+1;
        if(iSpeed>4){
            resolve("Data Saved");
        }
        else{
            reject("Failure");
        }
    })    
}

saveToDB('my college') //promise object
    .then((solved)=>{
        console.log('Success:',solved);
        console.log("d1");
        return saveToDB('my school');
    })
    .then((solved)=>{
        console.log('Success:',solved);
        console.log('d2');
        return saveToDB("my university");
    })
    .then(()=>
        console.log('d3')
    )
    .catch((error)=>{
        console.log('error:',error);
        console.log("Not working");
    })

