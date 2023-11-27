document.addEventListener("DOMContentLoaded", function(){
    var searchButton = document.getElementById("search-button");
    var countryInp = document.getElementById("country-inp");
    var result = document.getElementById("result");


    searchButton.addEventListener("click", () =>{
        let countryName = countryInp.value;

        let url = `https://restcountries.com/v3.1/name/${countryName}?
        fullText=true`;

        //fetch the country info from the api

        fetch(url).then((response) => response.json())
        .then((data) => {
            console.log(data);

            result.innerHTML = `
               <img src = "${data[0].flags.svg}" class="flag-img" />

               <h2>${data[0].name.common}</h2>

               <div class="wrapper">
               <div class="data-wrapper">
               <h4>Capital:</h4>
               <span>${data[0].capital[0]}</span>
               </div>

               <div class = "wrapper">
               <div class = "data-wrapper">
               <h4>Continent:</h4>
               <span>${data[0].continents[0]}</span>
               </div>

               <div class = "wrapper">
               <div class = "data-wrapper">
               <h4>Population:</h4>
               <span>${data[0].population}</span>
               </div>

            `
        })
    })





})