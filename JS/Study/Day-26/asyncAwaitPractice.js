const p1=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Hello");
    },10000);
})

const p2=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("World");
    },5000);
})

const p3=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Okay");
    },15000);
})

const p4=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Huhu");
    },10000);
})

async function getData(){
    console.log("Started");

    let var1=await p1;
    console.log('hello');
    console.log(var1);

    let var2=await p2;
    console.log('world');
    console.log(var2);

    let var4=await p4;
    console.log('hello');
    console.log(var4);
    
    let var3=await p3;
    console.log('ok');
    console.log(var3);
}
getData();