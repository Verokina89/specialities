const express = require('./app-express-routes');

// Escucha en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Node.js está escuchando en el puerto ${PORT}.`);
});

/*
//Para montar el servidor requerimos http.
const http = require('node:http');

//crear el servidor.
const server = http.createServer((req, res) => {
  //traemos las dos parte; require y response.
  res.writeHead(200, { 'Content-Type': 'text/html' }); //escribimos la cabecera y que responda en un servidor 200.
  res.end('Hola Mundo!'); //res-end para ver que devuelve
});

//escuchamos al servidor.
server.listen(3000, () => {
  //trabajamos en el puerto 3000.
  console.log('Node.js está escuchando en el puerto 3000.'); //lo que tiene que mostrar.
});
*/