import {Schema, model} from mongoose

const becarios = new Schema({
    id_empleado: Number,
    nombre: String,
    edad: Number,
    area_asignada: String,
    sueldo: String
})

export const becarios_schema = new model("Lista de becarios", becarios)
