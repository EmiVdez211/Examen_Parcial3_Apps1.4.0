import entrenadores_schema from "../models/entrenadores.mod.js"

entrenadores_schema.create({
    id_empleado: 22030777,
    nombre: "Carlos Novoa",
    edad: 19,
    area_especializada: "Ensamblaje de partes",
    correo: "cnovoa@nissan.com",
    telefono: 80047771014
})

export const test_entrenadores = (() => {
    console.log("Llamando funcion desde controllers")
}
)
