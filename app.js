import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import {test_autos} from "../Nissan/backend/controllers/autos.con.js"
import {test_becarios} from "../Nissan/backend/controllers/autos.con.js"
import {test_clientes} from "../Nissan/backend/controllers/clientes.con.js"
import {test_empleados} from "../Nissan/backend/controllers/empleados.con.js"
import {test_entrenadores} from "../Nissan/backend/controllers/entrenadores.con.js"
import {test_lideres} from "../Nissan/backend/controllers/lideres.con.js"
import {test_nomina} from "../Nissan/backend/controllers/nomina.con.js"
import {test_tecnicos} from "../Nissan/backend/controllers/tecnicos.con.js"

dotenv.config()

mongoose.connect(process.env.url)

    .then(() => {
        console.log("La conexión del examen fue exitosa")
    })
    .catch((err) => {
        console.log("Error 404: Hubo un error dentro del programa...")
    })

const app = express
app.use(cors())

app.listen(4000, () => {
    Console.log("Esta funcionando correctamente el server local")
}
)

test_autos()
test_becarios()
test_clientes()
test_empleados()
test_entrenadores()
test_lideres()
test_nomina()
test_tecnicos()