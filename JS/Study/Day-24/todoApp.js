let input=document.querySelector('input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');

btn.addEventListener('click',function(){
    let li=document.createElement('li');
    li.innerText=input.value
    ul.append(li);
    input.value="";

    let b=document.createElement('button')
    b.innerText='Delete';
    b.classList.add('bttn');
    li.appendChild(b);
})

ul.addEventListener('click',function(){
    if(event.target.nodeName=='BUTTON'){
        let li=event.target.parentElement;
        li.remove();
    }
})

// let bttn=document.querySelectorAll('.bttn');
// for (b of bttn){
//     b.addEventListener('click',function(){
//         let par=b.parentElement;
//         par.remove();
//     })
// }

