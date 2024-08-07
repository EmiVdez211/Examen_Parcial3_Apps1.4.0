import {Schema, model} from mongoose

const lideres = new Schema({
    id_empleado: Number,
    nombre: String,
    edad: Number,
    jefe_zona: String,
    correo: String,
    telefono: Number,
    ext: Number
})

export const lider_schema = new model("Lista de jefaturas", lideres)
