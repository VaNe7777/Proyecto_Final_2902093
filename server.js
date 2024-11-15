import pkg from 'colors';
const {colors} = pkg;

import dotenv from 'dotenv';
import express from 'express';

import pruebaRouter from './routes/pruebaRoutes.js';
import authRouter from './routes/authRouter.js';

import connectDB from './config/db.js';




// Leer del .env = formada por claves y valores
dotenv.config()

connectDB()


// Crear el objeto aplicacicón de expresión
const app = express()


// Configurar app para que acepte bodys en json
app.use(express.json())


const PORT = process.env.PORT


app.use('/api/pruebas' , pruebaRouter)
app.use('/api/auth' , authRouter)



// Crear sevidor express
app.listen( PORT , () => {
    console.log(`Servidor ejecutando en el puerto: ${ PORT }`
    .bgGreen.red.bold)
})