let todo=[];
let req=prompt("Please enter your request");
console.log(req);

while(true){
    if(req=='quit'){
        console.log("Quiting App");
        break;
    }
    else if(req=='list'){
        console.log("----------------------");
        console.log("Sl no.  Task");
        console.log("-------------");
        for(let i=0; i<todo.length; i++){
            console.log(`${i+1}.     ${todo[i]}`);
        }
        console.log("----------------------");
    }
    else if(req=='add'){
        let addTask=prompt("Please enter the task");
        todo.push(addTask);
        console.log("Task Added");
    }
    else if(req=='delete'){
        let delIndex=prompt("Enter the sl no of task to delete");
        todo.splice(delIndex-1,1);
        console.log("Successfully Deleted");
    }
    else{
        console.log("Wrong Input");
    }
    req=prompt("Please enter your request");
}