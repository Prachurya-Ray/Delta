let ur = 'https://catfact.ninja/fact';
async function  getCatFact() {
    try{
        const response = await fetch(ur);
        const res = await response.json();
        console.log(res.fact);
    
        const response1 = await fetch(ur);
        const res1 = await response1.json();
        console.log(res1.fact);
    }
    catch(err){
        console.log("Error: ", err);
    }
}
getCatFact();