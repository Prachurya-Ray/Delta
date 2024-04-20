h1=document.querySelector('h1');

async function changeColor(color, delay){
    return new Promise((resolve, reject)=>{            
        setTimeout(()=>{
            h1.style.color=color;
            resolve();
        },delay);
    })
}

async function change(){
    await changeColor('red',1000);
    await changeColor('orange',1000);
    await changeColor('yellow',1000);
    await changeColor('green',1000);
    await changeColor('blue',1000);
}
