import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try{

        const conn = 
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Conexión exitosa a mongo: ${conn.connection.host}`.bgCyan.gray)

    } catch (error) {

        console.log(`Error al conectar a mongo: ${ error }`)
        process.exit(1)

    }
}

export default connectDB