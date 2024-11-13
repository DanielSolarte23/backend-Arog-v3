//importaciones
import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDB from './config/db.js';

//configuracion dotenv
dotenv.config();

//conexion a la bdd
connectDB();

//.env
const port = process.env.PORT;

//establecer app
const app = express();


//cors para aceptar la peticion desde el front
app.use(cors({
    //direccion del front
    origin: 'http://localhost:3000',
    //recibe credenciales desde el front
    Credentials: true
}))


app.listen(port, () => {
    console.log(`>>Servidor corriendo en http://localhost:${port}<<`);
})





