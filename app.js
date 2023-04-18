// Importamos las librerías necesarias
const express = require('express');
const app = express();
const mysql = require('mysql');

app.set('view engine', 'ejs');
app.use(express.static('public'));

const connection = mysql.createConnection({
  host     : '192.168.0.12',
  user     : 'root',
  password : 'atrellusx',
  database : 'lab3_dsn',
  insecureAuth: true
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

// Iniciamos el servidor en el puerto 9000
app.listen(9000, () => {
  console.log('Servidor iniciado en el puerto 9000');
});

*/
