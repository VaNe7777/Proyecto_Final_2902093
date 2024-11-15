import mongoose from "mongoose"
import User from "../entities/user.entity.js"
import bcrypt from 'bcrypt'


export const userRegister = async (req , res) => {

    // Desestructurar el body (payload)
    const { firstName, lastName, email, password, isAdmin } = req.body

    // Verificar si el usuario existe por email
    const vUser = await User.findOne({ email : req.body.email})

    if (vUser){
        res.status(400).json({
            message: "Ya existe el usuario"
        })
    } else{

        // Encriptar el password que llega del body
        const sal = await bcrypt.genSalt(10)
        const bcPassword = await bcrypt.hash(password, sal)


        // Crear el nuevo usuario:
        const newUser = await User.create({
            firstName, lastName, email, password : bcPassword, isAdmin
        })

        res.status(201).json(newUser)
    }

    

}

export const userLogin = (req , res) =>{
    res.send("Login de usuarios")
}
