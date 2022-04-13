"use strict";

const url = "https://randomuser.me/api/?results=10";

fetch(url)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    const usuarios = [];
    for (const result of data.results) {
      const usuario = {
        name: result.name.first + " " + data.results[0].name.last,
        city: result.location.city,
        image: result.picture.large,
        userName: result.login.username,
      };
      usuarios.push(usuario);
    }

    console.log(usuarios);
    /*const city = 
    const image = 
    const userName = 
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

    results.innerHTML = html;*/
  });

//console.log(results);
