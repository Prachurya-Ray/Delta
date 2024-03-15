let Eo=setInterval( ()=>{
    console.log("Hello World");
},2000)

// clearInterval(Eo)

setTimeout(()=> clearInterval(Eo),10000)