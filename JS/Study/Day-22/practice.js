let body=document.querySelector('body');

let para=document.createElement('p');
para.innerText="Hey I'm red!";
para.style.color='red';
body.appendChild(para);

let h3=document.createElement('h3');
h3.innerText="I'm a blue h3!";
h3.style.color='blue';
body.appendChild(h3);

let div=document.createElement('div');
div.classList.add('box');
body.appendChild(div);

let box=document.querySelector('div');

let h1=document.createElement('h1');
h1.innerHTML="I'm in a div";

let p=document.createElement('p');
p.innerHTML="Me too!";

box.appendChild(h1);
box.appendChild(p);