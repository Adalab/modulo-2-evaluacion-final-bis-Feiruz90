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
    const image = data.results[0].picture.medium;
    const userName = data.results[0].login.username;
    console.log(userName);
  });
