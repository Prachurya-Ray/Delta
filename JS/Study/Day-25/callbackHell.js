h1=document.querySelector('h1');

// function changeColor(color, delay, nextColor){
//     setTimeout(()=>{
//         h1.style.color=color;
//         nextColor();
//     },delay);
// }

// changeColor('red',1000,()=>{
//     changeColor('orange',1000, ()=>{
//         changeColor('yellow',1000,()=>{
//             changeColor('green',1000);
//         });
//     });
// });

function changeClr(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color=color,
            resolve("State Changed");
        },delay);
    })
}

changeClr('red',1000)
    .then((change)=>{
        console.log(change);
        return changeClr('yellow',1000);
    })
    .then(()=>{
        return changeClr('blue',1000);
    });

