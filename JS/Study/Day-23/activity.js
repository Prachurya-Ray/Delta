let h3=document.querySelector('h3');
let btn=document.querySelector('button');
let box=document.getElementsByClassName('box');

function rangeCalc(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);

    let color=`rgb(${r},${g},${b})`
    return color;
}

btn.addEventListener('click',()=>{
    h3.innerText=(rangeCalc());
    box[0].style.backgroundColor=rangeCalc();
});