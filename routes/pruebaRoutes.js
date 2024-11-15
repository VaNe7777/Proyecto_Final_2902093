import express from 'express'

const pruebaRouter = express.Router()

// Rutas de prueba q estaran en server.js


// PRIMERA RUTA REST en express
pruebaRouter.get('/saludo' , ( solicitud , respuesta ) => {
    respuesta.send("Hola 2902093")
})



//Ruta de POST
pruebaRouter.post("/registro" , (req , res) =>{
    console.log(req.body)
    res.status(200).json({
        "mensaje" : "Registro Exitoso",
        "datos" : {
            "email" : req.body.email,
            "password" : req.body.password
        }
    })
})


export default pruebaRouter