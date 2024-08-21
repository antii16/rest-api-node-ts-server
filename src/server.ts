import express from "express";
import colors from 'colors'
import router from "./router";
import db from "./config/db";


// Conectar a base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.blue('Conexión existosa a la BD'))
    } catch (error) {   
        // console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar la BD'))
    }
}
connectDB()
const server = express()

server.use('/api/products', router)

export default server