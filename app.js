/*
4. Generación de Páginas HTML:
  - Utiliza literal string para construir páginas HTML directamente en el código..
  - Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario.

5. Prueba de la Aplicación:
  - Abre tu navegador y visita las diferentes rutas, por ejemplo:
http://localhost:3000/marketing
http://localhost:3000/developers

  - Intenta acceder a una ruta no definida para verificar el manejo de errores 404.
  - En la ruta "/" puedes crear una navegación que vaya a cada una de las páginas y en cada página puedes repetir esa navegación o solo un volver a home "/". */

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
  
//Middlewar;registrar el path de cada solicitud.Visualizar el path en la terminal.
app.use((req, res, next) => {
  const parsePath = path.parse(req.path);
    console.log('URL requerida: ', req.url);
    next();
});

const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

//filtrado por especialidad. array que contendra solo los usuarios con especialidad requerida
const useredSpecialty = (user, specialty) => {
  const usersData = user.filter(user => user.specialty === specialty);
  return usersData;
};
  
//ruta principal Home.
app.get('/', (req, res) => {
  const specialPath = [...req.path].filter(item => item != "/").join('');
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>ESPECIALISTAS</title>
        </head>
        <body>
          <h1>🏘️  Home</h1>
          <p>Especialidad: ${req.path}</p>
          <nav>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/ventas">Ventas</a>
            <a href="/QAs">QAs</a>
            <a href="/about">About</a>
          </nav>
        </body>
        </html>
    `); 

});
  
//ruta page marketing.
app.get('/marketing', (req, res) => {
  const specialPath = [...req.path].filter(item => item != "/").join('');
  const users = useredSpecialty(usersData, 'marketing'); //filtado por especialidad
  const userlength = users.length;
    res.send(`
        <!DOCTYPE html>                                                                         
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Marketing - Especialistas.</title>
        </head>
        <body>
          <h1>👩🏽‍💼 Especializados en Marketing.</h1>
          <p>Usuarios Especializados en: ${req.path} ( ${userlength} )</p>
          <ol>
            ${users.map(user => `<li>${user.name}, ${user.age} años</li>`).join('')}
          </ol>
          <nav>
            <a href="/">Home</a>
            <a href="/developers">Developers</a>
            <a href="/ventas">Ventas</a>
            <a href="/QAs">QAs</a>
            <a href="/about">About</a>
          </nav>
        </body>
        </html>
    `); 
});

//page developers
app.get('/developers', (req, res) => {
  const specialPath = [...req.path].filter(item => item != "/").join('');
  const users = useredSpecialty(usersData, 'developers'); //filtr por especialidad.
  const userlength = users.length;
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Developers</title>
        </head>
        <body>
          <h1>👩🏽‍💻 Desarrolladores Especializados.</h1>
          <p>${req.path} ( ${userlength} ) </p>
          <ol>
          ${users.map(user => `<li>${user.name} - ${user.age} años</li>`).join('')}
          </ol>
          <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/ventas">Ventas</a>
            <a href="/QAs">QAs</a>
            <a href="/about">About</a>
          </nav>
        </body>
        </html>
    `); 
});

app.get('/ventas', (req, res) => {
  const specialPath = [...req.path].filter(item => item != "/").join('');
  const users = useredSpecialty(usersData, 'ventas'); //filtrado  por especialidad
  const userlength = users.length;
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ventas</title>
        </head>
        <body>
          <h1>👩🏽 Especializados en Ventas.</h1>
          <p>Usuarios Especializados en: ${req.path} ( ${userlength} )</p>
          <ol>
            ${users.map(user => `<li>${user.name} - ${user.age} años</li>`).join('')}
          </ol>
          <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/QAs">QAs</a>
            <a href="/about">About</a>
          </nav>
        </body>
        </html>
    `); 
});

app.get('/QAs', (req, res) => {
  const specialPath = [...req.path].filter(item => item != "/").join('');
  const users = useredSpecialty(usersData, 'QAs'); //filtrado por especialidad.
  const userlength = users.length;
  // console.log(req);
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>🤓 QAs</title>
        </head>
        <body>
          <h1>Especalizados SQAs.</h1>
          <p>Usuarios Especializados en: ${req.path} ( ${userlength} )</p>
          <ol>
            ${users.map(user => `<li>${user.name} - ${user.age} años</li>`).join('')}
          </ol>
          <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/ventas">Ventas</a>
            <a href="/about">About</a>
          </nav>
        </body>
        </html>
    `); 
});

//manjamos el error 404 Page fauld"
app.use((req, res) => {

    res.status(404).send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error de Página.</title>
      </head>
      <body>
        <h1>⚠️  Error 404. Página no encontrada  ⚠️</h1>
        <p>Puedes acceder a los siguientes enlaces: ${req.path}</p>
          <nav>
            <a href="/">Home</a>
            <a href="/marketing">Marketing</a>
            <a href="/developers">Developers</a>
            <a href="/ventas">Ventas</a>
            <a href="/QAs">QAs</a>
            <a href="/about">About</a>
          </nav
      </body>
      </html>
    `);  
});
  
app.listen(PORT, () => {
  console.log(`Node.js está escuchando en el puerto ${PORT}.`)
});