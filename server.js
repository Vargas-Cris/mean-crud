//Inicialización de modulos 
var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var mongoose = require("mongoose");
var rutas = require('./backend/rutas');

//Configuracion
mongoose.connect('mongodb://localhost/crud') //nombre de la base de datos
app.use(express.static(__dirname+'/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// Carga de rutas
rutas.iniciar(__dirname);
rutas.principal(app);

//Iniciar el servidor
app.listen(3000);
console.log("Escuchando en el puerto 3000");
