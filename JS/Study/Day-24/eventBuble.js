let div=document.querySelector('div');
let ul=document.querySelector('ul');
let li=document.querySelectorAll('li');

div.addEventListener('click',function(){
    console.log('div is triggered');
});

ul.addEventListener('click',function(){
    console.log('ul is triggered');
});

for (l of li){
    l.addEventListener('click',function(){
        event.stopPropagation();
        console.log('l is triggered');
    })
}