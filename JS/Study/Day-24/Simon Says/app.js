let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let clrs=['red','orange','green','blue'];

let h2=document.querySelector('h2');
let btn=document.querySelectorAll('.btn');

document.addEventListener('keypress',function(){
    if(started==false){
        started=true

        LevelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("btnflash");
    setTimeout(function(){
        btn.classList.remove('btnflash');
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}

function LevelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let randomIndex=Math.floor(Math.random()*3);
    let randomClr=clrs[randomIndex];
    let randombtn=document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    gameFlash(randombtn);
}

function checkAns(){
    let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            LevelUp();
        }
    }
    else{
        h2.innerText=`Game Over!`;
    }

}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userClr=btn.getAttribute('id');
    userSeq.push(userClr);
}

for(bt of btn){
    bt.addEventListener('click',btnPress);
}
