let form=document.querySelector('form');

form.addEventListener("submit",function(event){
    event.preventDefault();
    let input=this.elements[0];
    let name=input.value;
    alert(`Hello ${name}!`);
})