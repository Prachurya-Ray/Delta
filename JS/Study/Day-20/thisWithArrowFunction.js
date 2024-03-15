const students ={
    name:"Prachurya",
    mark:95,
    prop:this,
    getName: function(){
        return this.name;
    },
    getMark: ()=>{
        console.log(this);
        return this.mark;
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this)
        },2000)
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this)
        },2000)
    }
}