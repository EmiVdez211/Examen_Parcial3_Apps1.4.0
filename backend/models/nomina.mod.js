import {Schema, model} from mongoose

const nomina = new Schema({
    id_empleado: Number,
    nombre_empleado: String,
    cuenta_bancaria: Number,
    cantidad: Number,
    deducciones: Number,
    total: Number,
    total_texto: String
})

export const nomina_schema = new model("Nomina de empleados", nomina)
