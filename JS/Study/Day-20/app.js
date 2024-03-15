const student={
    name:"Prachurya",
    math:99,
    science:98,
    comp:100,
    avg() {
        // console.log(this);
        let average=(student.math+this.science+this.comp)/3;
        console.log(`${this.name} mark is ${average}`);
    }
};

function avg(){
    console.log(this);
}