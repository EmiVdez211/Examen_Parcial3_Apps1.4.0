import empleados_schema from "../models/empleados.mod.js"

empleados_schema.create({
    id_empleado: 22030756,
    nombre: "Emilio Valadez",
    edad: 21,
    area_asignada: "Area de sistemas",
    sueldo: "25000$"
})

export const test_empleados = (() => {
    console.log("Llamando funcion desde controllers")
}
)