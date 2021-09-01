function showCountries(){
    //initialize a new XMLHttpRequest --> the object comes with a lot of methods
    let req = new XMLHttpRequest();

    //open is used to initialize the request --> 3 things to pass in the method
    //first: what kind of request is it (GET / POST / etc. ) --> http request types
    //second parameter: path to  the data
    //third: is it asynchronous or not
    req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
    //handle the response 
    //httpstatusdogs --> shows every status
    //callback function 
    req.onload = function(){
        if(req.status == 200){
            console.log("sucess");
            //get the response
            let countries = JSON.parse(this.response);
            //work with all countries 
            //country is just the name for each element
            countries.forEach(country => {
                const countryCard = document.createElement('div');
                const countryCardImage = document.createElement('img');
                countryCard.innerHTML = country.name;
                countryCardImage.src = country.flag;
                document.getElementById("feed").appendChild(countryCard);
                countryCard.appendChild(countryCardImage);
            });
        }
    }

    //send the request - send method
    req.send();
}

fetch('https://restcountries.eu/rest/v2/all')
//then contains a callback functions
//runs if the previous operation is sucessfull
.then(response => {
    return response.json()
})
//once that is complete we move on to the next block
.then(json => {
    let countries = json;
    console.log(countries)
})
//catch -->error handling is put at the end --> if any then block failed
.catch(err => {
    console.log('errors:' + err.message)
})

//make it more readable 
//async function returns a promise
//await needs to be inside of a async function
async function getData(){
    //await stops the fetch to assign a value to the response 
    //until the promise from fetch has resolved
 const response = await fetch('https://restcountries.eu/rest/v2/all')
 const data = await response.json() 
 return data
}

getData().then(data => console.log(data))
//logging out the errors
.catch(err => console.log('errors' + err.message))