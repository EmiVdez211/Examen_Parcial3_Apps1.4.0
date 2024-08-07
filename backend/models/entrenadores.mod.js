import {Schema, model} from mongoose

const entrenadores = new Schema({
    id_empleado: Number,
    nombre: String,
    edad: Number,
    area_especializada: String,
    correo: String,
    telefono: Number
})

export const entrenadores_schema = new model("Lista de entrenadores", entrenadores)
