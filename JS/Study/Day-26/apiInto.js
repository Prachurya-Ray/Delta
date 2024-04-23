let data = '{"activity":"Cook something together with someone","type":"cooking","participants":2,"price":0.3,"link":"","key":"1799120","accessibility":0.8}';
let validData = JSON.parse(data);
console.log(validData.activity);    //Cook something together with someone

let student ={
    name:"Prachurya Ray",
    roll:2270232
}
let JSONdata = JSON.stringify(student);
console.log(JSONdata);      //{"name":"Prachurya Ray","roll":2270232}