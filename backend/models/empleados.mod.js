import {Schema, model} from mongoose

const empleados = new Schema({
    id_empleado: Number,
    nombre: String,
    edad: Number,
    area_asignada: String,
    sueldo: String
})

export const empleados_schema = new model("Lista de empleados", empleados)
