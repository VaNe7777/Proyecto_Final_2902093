import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName : {
        type: String, 
        require : [true , "Nombre requerido"]
    }, 

    lastName : {
        type: String, 
        require : [true , "Apellido requerido"]
    }, 

    email : {
        type: String, 
        require : [true , "Email requerido"],
        unique : [true, "Email no encontrado"],

    }, 

    password : {
        type: String, 
        require : [true , "Contraseña requerida"]
    }, 

    isAdmin : {
        type: Boolean, 
        require : [true , "isAdmin es requerido"],
        default : false
    }}, 

    {
        Timestamps : true
    }
)


const User = mongoose.model("User", UserSchema)
export default User 