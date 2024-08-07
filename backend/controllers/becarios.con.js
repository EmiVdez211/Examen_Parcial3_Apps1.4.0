import becarios_schema from "../models/becarios.mod.js"

becarios_schema.create({
    id_empleado: 22030666,
    nombre: "Brandon Miguel",
    edad: 21,
    area_asignada: "Area de sistemas",
    sueldo: "no"
})

export const test_becarios = (() => {
    console.log("Llamando funcion desde controllers")
}
)