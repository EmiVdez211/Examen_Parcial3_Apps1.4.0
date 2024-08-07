import {Schema, model} from mongoose

const autos = new Schema({
    ns: String,
    nombre: String,
    año: Number,
    precio: String,
    tienda: String
})

export const modelo_schema = new model("Catalogo de autos", autos)
