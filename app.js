// Importamos las librerías necesarias
const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
}); 

connection.connect();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

/*
// Creamos una ruta para mostrar la lista de clientes
app.get('/clientes', (req, res) => {

  connection.query('SELECT * FROM clientes', function(error, results, fields) {
    if (error) throw error;
    res.render('../views/clientes.ejs', { clientes: results });
  });

});

// Creamos una ruta para mostrar la lista de productos
app.get('/productos', (req, res) => {
  connection.query('SELECT * FROM productos', function(error, results) {
    if (error) throw error;
    res.render('../views/productos.ejs', {productos: results});
  });
});  
*/

// Iniciamos el servidor en el puerto 9000
app.listen(9000, () => {
  console.log('Servidor iniciado en el puerto 9000');
});



