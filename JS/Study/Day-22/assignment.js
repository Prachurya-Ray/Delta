let body=document.querySelector('body');

let input=document.createElement('input');
let btn=document.createElement('button');
btn.innerHTML="Click me";

body.appendChild(input);
body.append(btn);

input.placeholder="username";
btn.setAttribute('id','btn');

let btn_query=document.querySelector('button');
let btn_id=document.getElementById('btn');

btn_query.style.backgroundColor='blue';
btn_id.style.color='white';

let h1=document.createElement('h1');
h1.innerHTML='<u>DOM Practice</u>';
body.prepend(h1);
h1.style.color='purple';

let p=document.createElement('p');
p.innerHTML='Apna College <b>Delta</b> Practice';
body.append(p);

btn.classList.add('cursors');

console.dir(btn);