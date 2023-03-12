let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let xhttp = new XMLHttpRequest();
xhttp.onload = function () {    
    let response = JSON.parse(this.responseText);
    console.log(response.map((country) => {
        return country.flag;
    }));
};

xhttp.open('GET', 'https://restcountries.com/v3.1/all');
xhttp.send();