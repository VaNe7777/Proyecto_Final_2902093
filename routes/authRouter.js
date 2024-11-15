import express, { response } from 'express';
import { userRegister , userLogin } from '../controllers/authController.js';


const authRouter = express.Router()


// Ruta 1
authRouter.post('/register' , userRegister)

// Ruta 2
authRouter.post('/login' , userLogin)


export default authRouter