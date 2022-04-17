"use strict";

//La url la he cogido del httpps que me da el enunciado API
const urlServer = "https://randomuser.me/api/?results=10";

//Para coger a los 10 usuarios he hecho una peticion / request a la API
fetch(urlServer)
  .then(function (response) {
    // con responde hace que me extraiga el contenido y lo pase como un objeto ()
    return response.json();
  })
  // este segundo THEN hace que coja los datos del servidor
  .then(function (data) {
    // he creado un objeto vacio y lo he guardado en la constante del usuario
    const usuarios = [];
    for (const result of data.results) {
      const usuario = {
        // he utilizado OBJETO porque es un tipo de variable y dentro tiene nombres.
        name: result.name.first + " " + result.name.last,
        city: result.location.city,
        image: result.picture.large,
        userName: result.login.username,
      };
      usuarios.push(usuario);
    }
    for (const usuario of usuarios) {
      console.log(usuario);
      const results = document.querySelector("#results");
      // he creado una lista en html pero desde main.js para extraer los 10 usuarios.
      const html = `
    <li>
     <h2> ${usuario.userName}</h2> 
     <div>${usuario.name}</div>
     <div>${usuario.citycity}</div>
     <div> <img src="${usuario.image}" alt=""> </div>
     </li>

     `;

      results.innerHTML = results.innerHTML + html;
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
