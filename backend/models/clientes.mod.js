import {Schema, model} from mongoose

const clientes= new Schema({
    id_cliente: Number,
    nombre: String,
    edad: Number,
    telefono: Number,
    correo: String,
    direccion: String
})

export const clientess_schema = new model("Lista de clientes", clientes)
