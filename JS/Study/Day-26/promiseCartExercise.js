const cart = [
    {
        id:1,
        item:"Mouse",
        price:500
    },
    {
        id:2,
        item:"Keyboard",
        price:750
    },
    {
        id:3,
        item:"Phone",
        price:5000
    },
    {
        id:4,
        item:"Earburd",
        price:1000
    }
];
let wallet=7500;
const arr=[];

function createOrder(cart){
    return new Promise(function(resolve,reject){
        console.log("Enter The items:")
        for(let i=0; i<cart.length; i++){
            console.log(`${cart[i].id} : ${cart[i].item} : ${cart[i].price}`);
        }
        setTimeout(()=>{
            let num=prompt("Enter Number of items:");
            num=parseInt(num);
            if(num==0)
                reject("No Order Placed");
            while(num>0){
                let n=prompt("Enter item id number");
                n=parseInt(n);
                arr.push(n-1);
                num--;
            }
            let random=Math.floor(Math.random()*100000)+500000;
            resolve(random);
        },5000)
    })
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        let total=0;
        for(i of arr){
            if(i<0 || i>3)
                reject("Item Unavailable");
            total+=cart[i].price;
        }
        resolve([orderId,total]);
    })
}

function showOrderSummery(arr){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log(`The order number ${arr[0]} has a total of: ${arr[1]}`);
            resolve(arr[1]);
        },1000);
    })
}

function updateWallet(total){
    return new Promise(function(resolve,reject){    
        setTimeout(()=>{
            if(total>wallet)
                reject("Not enough money");
            wallet-=total;
            resolve(`Payment of ${total} Success`);
        },2000)
    });
}

createOrder(cart)
    .then(function(orderId){
        console.log(`Your Order ID is : ${orderId}`);
        return orderId;
    })
    .catch(function(err){
        console.log(err);
    })
    .then(function(orderId){
        return proceedToPayment(orderId);
    })
    .catch(function(err){
        console.log(err);
    })
    .then(function(arr){
        return showOrderSummery(arr);
    })
    .then(function(total){
        return updateWallet(total);
    })
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    });