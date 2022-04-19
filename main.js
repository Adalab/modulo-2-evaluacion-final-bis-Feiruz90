"use strict";
const usuarios = [];
//La url la he cogido del httpps que me da el enunciado API
const urlServer = "https://randomuser.me/api/?results=10";

//Para coger a los 10 usuarios he hecho una peticion / request a la API
fetch(urlServer)
  //es la respuesta de la peticion
  .then(function (response) {
    // con responde hace que me extraiga el contenido y lo pase como un objeto ()
    return response.json();
  })
  // este segundo THEN hace que coja los datos del servidor- cuando han llegado los datoss al servidor y he dado esta estructura ( parsear)
  //con data ya tengo todos los datos
  .then(function (data) {
    // he creado un objeto vacio y lo he guardado en la constante del usuario

    for (const result of data.results) {
      const usuario = {
        // he utilizado OBJETO porque es un tipo de variable y dentro tiene nombres para poder llamarlo
        name: result.name.first + " " + result.name.last,
        city: result.location.city,
        image: result.picture.large,
        userName: result.login.username,
        isFriend: false,
      };
      usuarios.push(usuario);
    }
    for (const usuario of usuarios) {
      console.log(usuario);
      const results = document.querySelector("#results");
      // he creado una lista en html pero desde main.js para extraer los 10 usuarios.
      const html = `

    <li onclick="addFriend('${usuario.userName}')" >

  
     
     <h2> ${usuario.userName}</h2> 
     <div>${usuario.name}</div>
     <div>${usuario.city}</div>
     <div> <img class="image" src="${usuario.image}" alt=""> </div>
     </li>

     `;

      results.innerHTML = results.innerHTML + html;
    }
  });

function addFriend(userName) {
  console.log("el usuario es " + userName);
}
