let form=document.querySelector('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
})

form.addEventListener('change',function(){
    console.log("Change Event");
    console.log(form.elements[0].value);
})

form.addEventListener('input',function(){
    console.log("Input Event");
    console.log(form.elements[0].value);
})