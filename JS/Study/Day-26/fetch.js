let url = 'https://catfact.ninja/fact';
fetch(url)
    .then(response => response.json()) 
    .then((data) => {
        console.log(data.fact)
        return fetch(url)
    })
    .then(res => res.json())
    .then(data => console.log(data.fact))
    .catch(error => console.log("Error: " + error));