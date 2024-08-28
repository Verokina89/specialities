## Ejercicio de Express - Listado de Usuarios por Especialidad

Este ejercicio tiene como objetivo practicar el uso de Express para crear un servidor web que gestiona y muestra información de usuarios en diferentes rutas. Utilizaremos un conjunto de datos en formato JSON que representa usuarios con diversas características, como nombre, edad y especialidad.

Lee el ejercicio completamente antes de empezar para poder entenderlo.

Una vez clonado el ejercico deberás hacer `npm install` en terminal para instalar las dependencias que están en `package.json` 

## Objetivo del Ejercicio

1. Ejecución del Ejercicio:
  - Crea un archivo llamado `app.js` donde irá tu código. //OK

2. Creación del Servidor:
  - Configura un servidor Express.
  - Crea rutas para la página principal (/) y diferentes especialidades como marketing (/marketing), developers (/developers), etc...
  - Implementa el manejo de errores 404 para rutas no definidas.
  - Las rutas serán las mismas de las `specialty` (abajo hay un objeto con datos que usarás para crear lo qiue pide el ejercicio)

3. Filtrado de Usuarios por Especialidad:
  - Crea una función para filtrar usuarios por su especialidad.
4. Generación de Páginas HTML:
  - Utiliza literal string para construir páginas HTML directamente en el código..
  - Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario.

5. Prueba de la Aplicación:
  - Abre tu navegador y visita las diferentes rutas, por ejemplo:
http://localhost:3000/marketing
http://localhost:3000/developers

  - Intenta acceder a una ruta no definida para verificar el manejo de errores 404.
  - En la ruta "/" puedes crear una navegación que vaya a cada una de las páginas y en cada página puedes repetir esa navegación o solo un volver a home "/".

Estos serán los usuarios a los que hay que acceder y en cada una de las páginas solo saldrán los que tengas las mismas especialidades:
* Conjunto de Datos de Usuarios

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
