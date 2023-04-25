// Importamos las librerías necesarias
const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.use(express.static('public'));

const clientes = [
  {id: 1, nombre: 'Juan'},
  {id: 2, nombre: 'María'},
  {id: 3, nombre: 'Pedro'}
];

const productos = [
  {id: 1, nombre: 'Producto 1', precio: 10},
  {id: 2, nombre: 'Producto 2', precio: 20},
  {id: 3, nombre: 'Producto 3', precio: 30}
];

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});


// Creamos una ruta para mostrar la lista de clientes
app.get('/clientes', (req, res) => {

  res.render('../views/clientes.ejs', {clientes})

});

// Creamos una ruta para mostrar la lista de productos
app.get('/productos', (req, res) => {
  res.render('../views/productos.ejs', {productos})
});  


// Iniciamos el servidor en el puerto 9000
app.listen(9000, () => {
  console.log('Servidor iniciado en el puerto 9000');
});



