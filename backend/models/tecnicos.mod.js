import {Schema, model} from mongoose

const tecnicos = new Schema({
    id_empleado: Number,
    nombre: String,
    edad: Number,
    area_especializada: String,
    correo: String,
    telefono: Number
})

export const tecnicos_schema = new model("Lista de tecnicos", tecnicos)
