"use strict";

const url = "https://randomuser.me/api/?results=10";

fetch(url)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    console.log(data.results);
    const usuarios = [];
    const city = data.results[0].location.city;
    const name = data.results[0].name.first + " " + data.results[0].name.last;
    const image = data.results[0].picture.large;
    const userName = data.results[0].login.username;
    console.log(userName);
    const results = document.querySelector("#results");

    const html = `
    <li>
     <h2> ${userName}</h2> 
     <div>${name}</div>
     <div>${city}</div>
     <div> <img src="${image}" alt=""> </div>
     </li>

     `;

    results.innerHTML = html;
  });

//console.log(results);
