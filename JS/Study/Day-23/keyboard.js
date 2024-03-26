let btn=document.querySelector('button');
let input=document.querySelector('input');

btn.addEventListener('click',function(){
    this.style.backgroundColor='aqua';
});

input.addEventListener('keydown',function(){
    console.log('key :',event.key);
    console.log('code : ',event.code);
    if(event.code=='ArrowUp' || event.code=='KeyW')
        console.log("Up");
})