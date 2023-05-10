// Importamos las librerías necesarias
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const clientes = [
  {id: 1, nombre: 'Juan', email:'juan@gmail.com'},
  {id: 2, nombre: 'María', email: 'maria@gmail.com'},
  {id: 3, nombre: 'Pedro', email: 'pedro@gmail.com'}
];

const productos = [
  {id: 1, nombre: 'Producto 1', precio: 10, descripcion:'Descripcion del producto 1'},
  {id: 2, nombre: 'Producto 2', precio: 20, descripcion:'Descripcion del producto 2'},
  {id: 3, nombre: 'Producto 3', precio: 30, descripcion: 'Descripcion del producto 3'}
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
app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 9000');
});



