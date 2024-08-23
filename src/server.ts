import express from "express";
import colors from 'colors';
import swaggerUi from "swagger-ui-express"
import router from "./router";
import db from "./config/db";
import swaggerSpec, {swaggerUiOptions} from "./config/swagger";


// Conectar a base de datos
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.blue('Conexión existosa a la BD'))
    } catch (error) {   
        // console.log(error)
        console.log(colors.red.bold('Hubo un error al conectar la BD'))
    }
}
connectDB()

// Instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions))

export default server