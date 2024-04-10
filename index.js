const express = require("express");
require('dotenv').config();
const {dbConnection}  = require('./database/config');
const app = express();
const routerApi = require('./routes');
const cors = require("cors");
// const port = process.env.PORT || 3000;

//Base de datos
dbConnection();

app.use(cors());

app.use(express.static('public'));
app.use(express.json());

// app.get("/", (req, res) =>{
//     res.send("Hola mi server en Express de prueba api ");
//   });
  

routerApi(app);

app.listen(process.env.PORT , () =>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
  });
  